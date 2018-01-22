const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
    username: String,
    password: String
})

module.exports = mongoose.model('buyer', buyerSchema);
