const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({

})

const postModel = mongoose.model('User', userSchema)
module.exports = postModel