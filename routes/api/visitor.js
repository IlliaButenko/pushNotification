const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');
const fs = require('fs')
const path = require('path')
const domainsFilePath = path.resolve(__dirname, '../../domains.db');

const User = require('../../models/User');
const BlockchainUser = require('../../models/BlockchainUser');
const Visitor = require('../../models/Visitor');

const DeviceDetector = require('node-device-detector');
const { lookup } = require('geoip-lite');
// @route    POST api/users
// @desc     Register user
// @access   Public
router.post('/', async (req, res) => {
    let useragent = req.useragent;
    const detector = new DeviceDetector;
    const DVC = detector.detect(req.headers['user-agent']);
    const device = DVC.device.model;
    const user_ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
    let country = 'Unknown';
    if (lookup(user_ip)) {
        country = lookup(user_ip).country;
    }

    // const country = 'US'
    let system = DVC.os.name;

    const subscription = JSON.stringify(req.body.subscription);
    if (!(system === 'Windows' || system === 'Android' || system === 'Mac')) {
        system = "Others"
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array()[0].msg });
    }

    try {
        let user = await Visitor.findOne({ user_ip: user_ip });
        if (user) {
            const newRow = {
                country,
                device,
                track_id: 'AAD76SD',
                system,
                subscription
            }
            const rr = await Visitor.updateOne({ user_ip: user_ip }, newRow)
            // console.log(subscription, '---')
            return res
                .status(200)
                .json({ text: 'this ip already exists and will update' });
        }
        visitor = new Visitor({
            user_ip,
            country,
            device,
            track_id: 'AAD76SD',
            system,
            subscription
        });
        const result = await visitor.save();
        res.send(true)

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server Error' });
    }
}
);
router.post('/backNotification', async (req, res) => {
    console.log(req.body);

})

module.exports = router;
