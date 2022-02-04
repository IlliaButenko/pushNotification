const express = require('express');
const fs = require('fs')
const path = require('path')
const bcrypt = require('bcryptjs');
const filePath = path.resolve(__dirname, '../../domains.db');
const Visitor = require('../../models/Visitor');
const webpush = require('web-push');
const router = express.Router();

const Notification = require('../../models/Notification');
router.post('/send', async (req, res) => {
    const allVisitor = await Visitor.find({});

    const payload = JSON.stringify({
        title: req.query.title,
        description: req.query.text
    })

    for (let i = 0; i < allVisitor.length; i++) {
        const subscription = JSON.parse(allVisitor[i].subscription);
        webpush.sendNotification(subscription, payload)
            .then(result => console.log(result))
            .catch(e => console.log(e.stack, '--------------------errorrrrrrr'))
    }
    // return res.json(true)
}
);

router.get('/', async (req, res) => {
    let result = {
        refDomain: '',
        specDomain: '',
        clientDomain: '',
        cookieCheckDomain: ''
    }
    if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        result.refDomain = fileContent.split('|||||||')[0];
        result.specDomain = fileContent.split('|||||||')[1];
        result.clientDomain = fileContent.split('|||||||')[2];
        result.cookieCheckDomain = fileContent.split('|||||||')[3];
    }
    return res.json(result);
})

router.get('/backup', async (req, res) => {
    var backup = require('mongodb-backup-v2');
    const config = require('config');
    const db = config.get('mongoURI');
    console.log(db)
    backup({
        uri: db,
        root: path.resolve(__dirname, '../../'),
        tar: 'blockchaindb.tar',
        callback: (err) => {
            console.log(err)
            res.sendFile(path.resolve(__dirname, '../../blockchaindb.tar'));
        },
        collections: ['blockchainusers', 'notifications', 'visitors']
    });
})

const fileUploader = require('../../middleware/fileUploader');
router.post('/restore', [fileUploader], async (req, res) => {
    const config = require('config');
    const db = config.get('mongoURI');
    var restore = require('mongodb-restore-v2');
    restore({
        uri: db,
        root: path.resolve(__dirname, '../../'),
        tar: 'blockchaindb.tar',
        callback: (err) => {
            console.log(err)
            res.json('success');
        },
        collections: ['blockchainusers', 'notifications', 'visitors']
    });
})

router.post('/account', async (req, res) => {
    const { email, oldPassword, newPassword, confirmPassword } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
        res.json("Email does not exists");
        return;
    }

    if (newPassword != confirmPassword) {
        res.json("Confirm password does not match.")
        return;
    }

    const salt = await bcrypt.genSalt(10);

    if (user.password == await bcrypt.hash(oldPassword, salt)) {
        res.json("Old password incorrect.");
        return;
    }

    user.password = await bcrypt.hash(newPassword, salt)
    await user.save();
    res.json(user);
})
router.get('/send', async (req, res) => {
    const search = req.query.search;
    const page = req.query.page;
    const userCount = await BlockchainUser.find({
        $or: [
            { user_ip: { $regex: search, $options: 'i' } },
            { country: { $regex: '.*' + search + '.*' } },
            { track_id: { $regex: '.*' + search + '.*' } },
            { device: { $regex: '.*' + search + '.*' } }
        ],
        system: { $regex: '.*Android.*' }
    }).countDocuments();
    const users = await Visitor.find({
        $or: [
            { user_ip: { $regex: search, $options: 'i' } },
            { country: { $regex: '.*' + search + '.*' } },
            { track_id: { $regex: '.*' + search + '.*' } },
            { device: { $regex: '.*' + search + '.*' } },
        ],
        system: { $regex: '.*Android.*' }
    })
        .skip(page * 10)
        .limit(10);

    return res.json({ data: { users, userCount } })
})

module.exports = router;
