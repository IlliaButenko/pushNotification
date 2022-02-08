const mongoose = require('mongoose');

const ReportsSchema = new mongoose.Schema({
    title: {
        type: String
    },
    image: {
        type: String
    },
    icon: {
        type: String
    },
    url: {
        type: String
    },
    text: {
        type: String,
    },
    fromTo: {
        type: String,
    },
    clicked: {
        type: Number,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('reports', ReportsSchema);
