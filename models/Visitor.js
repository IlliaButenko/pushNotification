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
    }

}, { timestamps: true });

module.exports = mongoose.model('visitor', VisitorSchema);
