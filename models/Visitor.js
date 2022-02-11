const mongoose = require('mongoose');

const VisitorSchema = new mongoose.Schema({
    user_ip: {
        type: String,
        unique: true
    },
    country: {
        type: String
    },
    device: {
        type: String,
    },
    track_id: {
        type: String,
    },
    system: {
        type: String,
    },
    subscription: {
        type: String,
    },
    first: {
        type: Boolean,
    },
    second: {
        type: Boolean
    },
    third: {
        type: Boolean,
    },
    fourth: {
        type: Boolean,
    },
    fifth: {
        type: Boolean,
    },
    main: {
        type: Boolean,
    },
    final: {
        type: Boolean
    }

}, { timestamps: true });

module.exports = mongoose.model('visitor', VisitorSchema);
