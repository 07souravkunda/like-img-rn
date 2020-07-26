const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postsSchema = new Schema({
    uri: {
        type: String,
        required: [true, 'Provide link']
    },
    liked: {
        type: Boolean,
        default: false
    }
})

const postModel = mongoose.model('Posts', postsSchema)
module.exports = postModel