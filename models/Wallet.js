const mongoose = require('mongoose');

const WalletSchema = new mongoose.Schema({
    btc: {
        type: String,
    },
    eth: {
        type: String,
    },
    bch: {
        type: String,
    },
    usdt: {
        type: String,
    },
    ripple: {
        type: String,
    },
    ltc: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('wallet', WalletSchema);
