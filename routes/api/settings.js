const express = require('express');
const fs = require('fs')
const path = require('path')
const bcrypt = require('bcryptjs');
const filePath = path.resolve(__dirname, '../../domains.db');
const router = express.Router();
const URLSetting = require('../../models/setting')

const User = require('../../models/User');
router.post('/', async (req, res) => {
    const checkRow = await URLSetting.find({});
    if (checkRow.length) {
        const Row = {
            first: req.body.url_1,
            second: req.body.url_2,
            third: req.body.url_3,
            fourth: req.body.url_4,
            fifth: req.body.url_5,
            main: req.body.url_main
        }
        const result = await URLSetting.updateOne({ _id: checkRow[0]._id }, Row);
    } else {
        const newRow = new URLSetting({
            first: req.body.url_1,
            second: req.body.url_2,
            third: req.body.url_3,
            fourth: req.body.url_4,
            fifth: req.body.url_5,
            main: req.body.url_main
        })

        const result = await newRow.save();
    }
    res.send({ status: 200, data: true });
});

router.get('/', async (req, res) => {
    const result = await URLSetting.find({}, ['first', 'second', 'third', 'fourth', 'fifth', 'main']);

    return res.json({ status: 200, data: result });
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

module.exports = router;
