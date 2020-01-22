const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentModel = new Schema({
    _id: { type: mongoose.ObjectId, required: true },
    postId: { type: 'String', required: true },
    author: { type: 'String', required: true },
    content: { type: 'String', required: true },
});

module.exports = mongoose.model('comments', commentModel);