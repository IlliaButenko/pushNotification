const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');
const Visitor = require('../../models/Visitor');
const URLSetting = require('../../models/setting');
const DeviceDetector = require('node-device-detector');
const { lookup } = require('geoip-lite');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post('/', async (req, res) => {
    const referer = req.headers.referer;
    const detector = new DeviceDetector;
    const DVC = detector.detect(req.headers['user-agent']);
    const device = DVC.client.name;
    const user_ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
    const track_id = req.body.subscription.keys ? req.body.subscription.keys.auth.toLocaleUpperCase().slice(0, 8) : '';
    const subscription = JSON.stringify(req.body.subscription);
    let system = DVC.os.name;
    let country = 'Unknown';

    if (lookup(user_ip)) {
        country = lookup(user_ip).country;
    }
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
            let updateRow = {
                country,
                device,
                track_id,
                system,
                subscription
            }
            let row = await URLSetting.find({}, ['first', 'second', 'third', 'fourth', 'fifth', 'main', 'final']);

            let urlData = {}
            for (let key in row[0]._doc) {
                if (key !== "_id") {
                    urlData[key] = (row[0][key])
                }
            }
            for (let key in urlData) {
                if (referer.includes(urlData[key])) {
                    updateRow[key] = true;
                    break;
                }
            }

            const rr = await Visitor.updateOne({ user_ip: user_ip }, updateRow)
            if (rr)
                return res
                    .status(200)
                    .json({ text: 'this ip already exists and will update' });
        } else {
            visitor = new Visitor({
                user_ip,
                country,
                device,
                track_id,
                system,
                subscription,
                first: false,
                second: false,
                third: false,
                fourth: false,
                fifth: false,
                final: false,
                main: true
            });
            const result = await visitor.save();
            res.send(true)
        }

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
