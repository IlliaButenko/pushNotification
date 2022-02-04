const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
    uid: {
        type: String
    },
    name: {
        type: String
    },
    image: {
        type: String
    },
    message: {
        type: String
    },
    type: {
        type: String
    },
    noted: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('notification', NotificationSchema);
