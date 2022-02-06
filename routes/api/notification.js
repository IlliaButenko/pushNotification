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
    const { title, iconUrl, image, text, userNo, userRange, sysValue, methodValue } = req.body
    const payload = JSON.stringify({
        title: title,
        description: text,
        image: image,
        icon: iconUrl,
        url: 'block-test.duckdns.org'
    })

    if (sysValue.length > 0) {
        for (let i = 0; i < sysValue.length; i++) {

            const visitor = await Visitor.find({ system: { $regex: '.*' + sysValue[i].title + '.*' } })
            if (methodValue === 'Individual' && visitor.length > 0) {
                const subscription = JSON.parse(visitor[parseInt(userNo) - 1].subscription);
                console.log(visitor[parseInt(userNo) - 1], subscription)
                sendNotification(subscription, payload);
            } else if (methodValue === 'Partial' && visitor.length > 0) {

                const iA = userRange.split('-')
                const from = parseInt(iA[0]) - 1;
                const to = parseInt(iA[1]) - 1

                if (from > visitor.length || from < 0) {
                    continue;
                }
                for (let j = from; j < visitor.length; j++) {
                    const subscription = JSON.parse(visitor[j].subscription);
                    sendNotification(subscription, payload);
                    if (j === to) {
                        break;
                    }
                }
            } else {
                for (let j = 0; j < visitor.length; j++) {
                    const subscription = JSON.parse(visitor[j].subscription);
                    sendNotification(subscription, payload);
                }

            }
        }
        return res.send(true)
    } else {
        const allVisitor = await Visitor.find({});

        for (let i = 0; i < allVisitor.length; i++) {
            const subscription = JSON.parse(allVisitor[i].subscription);
            sendNotification(subscription, payload);
        }
        return res.send(true)
    }
});
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
