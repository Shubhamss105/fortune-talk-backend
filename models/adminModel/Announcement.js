const mongoose = require('mongoose');
const announcementSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    }
});

const Announcement = mongoose.model('Announcement', announcementSchema);

module.exports = Announcement;