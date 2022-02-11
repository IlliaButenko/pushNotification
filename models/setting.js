const mongoose = require('mongoose');

const Urlsetting = new mongoose.Schema({
    first: {
        type: String,
        unique: true
    },
    second: {
        type: String
    },
    third: {
        type: String,
    },
    fourth: {
        type: String,
    },
    fifth: {
        type: String,
    },
    main: {
        type: String,
    },
    final: {
        type: String
    }

}, { timestamps: true });

module.exports = mongoose.model('urls', Urlsetting);
