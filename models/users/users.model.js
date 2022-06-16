var mongoose = require('mongoose');
var Schema = mongoose.Schema

var userSchema = new Schema({
    name: String,
    age: Number,
    gender: String,
    email: {
        type : String,
        unique: true,
    },
    otherDetails: {
        isAdmin: Boolean,
        isUser: Boolean
    }
});

module.exports = mongoose.model('User', userSchema);