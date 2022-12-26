const mongoose = require('mongoose');
let userSchema = mongoose.Schema({
    email: { type: String, unique: true },
    name: { type: String },
    password: { type: String },
}, { timestamps: true });
module.exports = mongoose.model('User', userSchema);