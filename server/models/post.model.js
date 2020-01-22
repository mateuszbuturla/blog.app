const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postModel = new Schema({
    _id: { type: mongoose.ObjectId, required: true },
    title: { type: 'String', required: true },
    content: { type: 'String', required: true },
    author: { type: 'String', required: true },
});

module.exports = mongoose.model('Post', postModel);