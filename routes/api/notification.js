const express = require('express');
const path = require('path')
const Visitor = require('../../models/Visitor');
const webpush = require('web-push');
const router = express.Router();
const Reports = require('../../models/Reports')


router.post('/send', async (req, res) => {
    const { title, iconUrl, image, linkUrl, text, userNo, userRange, sysValue, methodValue } = req.body
    let fromTo = ''
    const sysLength = sysValue.length;
    let totalclicked = 0;

    let newRow = new Reports({
        title,
        image,
        icon: iconUrl,
        url: linkUrl,
        text,
        fromTo,
        clicked: 0,
        totalclicked,
    })

    let payload = JSON.stringify({
        title: title,
        description: text,
        image: image,
        icon: iconUrl,
        url: linkUrl,
        n_id: newRow._id,
    })

    if (sysLength > 0) {
        for (let i = 0; i < sysLength; i++) {

            const visitor = await Visitor.find({ system: { $regex: '.*' + sysValue[i].title + '.*' } })
            const visitorLength = visitor.length;
            if (methodValue === 'Individual' && visitorLength > 0) {
                totalclicked++;
                if (visitorLength > parseInt(userNo) - 1) {

                    const subscription = JSON.parse(visitor[parseInt(userNo) - 1].subscription);
                    const param = visitor[parseInt(userNo) - 1].track_id;
                    payload.url = `${payload.url}?track=${param}`;
                    sendNotification(subscription, payload);
                }
            } else if (methodValue === 'Partial' && visitorLength > 0) {

                const iA = userRange.split('-')
                const from = parseInt(iA[0]) - 1;
                const to = parseInt(iA[1]) - 1
                totalclicked += to - from + 1;
                if (from > visitorLength || from < 0) {
                    continue;
                }
                for (let j = from; j < visitorLength; j++) {
                    const subscription = JSON.parse(visitor[j].subscription);
                    const param = visitor[j].track_id;
                    payload.url = `${payload.url}?track=${param}`;
                    sendNotification(subscription, payload);
                    if (j === to) {
                        break;
                    }
                }
            } else {
                totalclicked += visitor.length;
                for (let j = 0; j < visitor.length; j++) {
                    const subscription = JSON.parse(visitor[j].subscription);
                    const param = visitor[j].track_id;
                    payload.url = `${payload.url}?track=${param}`;
                    sendNotification(subscription, payload);
                }

            }
        }
        // return res.status(200).json({ success: 'Error' });

    } else {
        fromTo = "Users ALL"

        const allVisitor = await Visitor.find({});
        totalclicked = allVisitor.length;
        for (let i = 0; i < allVisitor.length; i++) {
            const subscription = JSON.parse(allVisitor[i].subscription);
            const param = visitor[i].track_id;
            payload.url = `${payload.url}?track=${param}`;
            sendNotification(subscription, payload);
        }
        // return res.status(200).json({ success: 'Error' });
    }


    if (sysLength > 0) {
        for (let i = 0; i < sysLength; i++) {
            fromTo += `${sysValue[i].title} `;
        }
        if (methodValue === 'Individual') {
            fromTo += `->${methodValue}->${userNo ? userNo : 'undefiend'}`;
        } else if (methodValue === 'Partial') {
            fromTo += `->${methodValue}->${userRange ? userRange : 'undefiend'}`;
        } else {
            fromTo += `->All`;
        }
    }
    newRow.totalclicked = totalclicked;
    newRow.fromTo = fromTo;
    const result = await newRow.save();
    if (result) {
        return res.status(200).json({ success: 'Success' });
    }
});

router.post('/clickEvent', async (req, res) => {
    const { title, description, n_id } = req.body;
    const matchRow = await Reports.findOne({ _id: n_id })
    if (matchRow) {
        const result = await Reports.findOneAndUpdate({ _id: n_id }, { clicked: parseInt(matchRow.clicked) + 1 })
        if (result) {
            res.send({ status: 200, data: true })
        } else
            res.send({ status: 200, data: true })
    }
})
const sendNotification = (subscription, payload) => {
    webpush.sendNotification(subscription, payload)
        .then(result => {
            console.log('success')
        })
        .catch(e => {
            console.log('error')
        })
}

module.exports = router;
