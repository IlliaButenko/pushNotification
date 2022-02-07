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
    }
});

module.exports = mongoose.model('reports', ReportsSchema);
