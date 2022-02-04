const mongoose = require('mongoose');

const BalancesSchema = new mongoose.Schema({
    btc: {
        type: Number,
    },
    eth: {
        type: Number,
    },
    bch: {
        type: Number,
    },
    usdt: {
        type: Number,
    },
    ripple: {
        type: Number,
    },
    ltc: {
        type: Number,
    },
    uid: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('balances', BalancesSchema);
