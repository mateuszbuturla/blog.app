const commentController = require('../models/comment.model');
const mongoose = require('mongoose');

exports.getComments = async (req, res) => {
    try {
        res.status(200).json(await commentController.find({ postId: req.params.postId }));
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.addComment = async (req, res) => {
    const { postId, author, content } = req.params;
    try {
        db.collection('comments').insert({ _id: mongoose.Types.ObjectId(), postId: postId, author: author, content: content })
        res.status(200).json();
    } catch (err) {
        res.status(500).json(err);
    }
}