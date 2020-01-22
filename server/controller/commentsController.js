const commentController = require('../models/comment.model');

exports.getComments = async (req, res) => {
    try {
        res.status(200).json(await commentController.find({ postId: req.params.postId }));
    } catch (err) {
        res.status(500).json(err);
    }
}