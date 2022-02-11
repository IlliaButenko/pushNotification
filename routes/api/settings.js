const express = require('express');
const router = express.Router();
const URLSetting = require('../../models/setting')
const Visitor = require('../../models/Visitor');

router.post('/', async (req, res) => {
    const checkRow = await URLSetting.find({});
    if (checkRow.length) {
        const Row = {
            first: req.body.url_1,
            second: req.body.url_2,
            third: req.body.url_3,
            fourth: req.body.url_4,
            fifth: req.body.url_5,
            main: req.body.url_main,
            final: req.body.url_final
        }
        const result = await URLSetting.updateOne({ _id: checkRow[0]._id }, Row);
    } else {
        const newRow = new URLSetting({
            first: req.body.url_1,
            second: req.body.url_2,
            third: req.body.url_3,
            fourth: req.body.url_4,
            fifth: req.body.url_5,
            main: req.body.url_main,
            final: req.body.url_final
        })

        const result = await newRow.save();
    }
    res.send({ status: 200, data: true });
});

router.get('/', async (req, res) => {
    const user_ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
    const urlResult = await URLSetting.find({}, ['first', 'second', 'third', 'fourth', 'fifth', 'main', 'final']);
    const visitorResult = await Visitor.find({ user_ip: user_ip }, ['first', 'second', 'third', 'fourth', 'fifth', 'main', 'final'])
    return res.json({ status: 200, data: { urlResult: urlResult[0], visitorResult: visitorResult[0] } });
})

module.exports = router;
