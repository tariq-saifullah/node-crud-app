const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    contactNumber: String,
    address: String
});

module.exports = mongoose.model('contact', contactSchema);