const postModel = require('../models/post.model');
const mongoose = require('mongoose');

exports.getAllPosts = async (req, res) => {
    try {
        res.status(200).json(await postModel.find());
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.getNewPosts = async (req, res) => {
    try {
        res.status(200).json(await postModel.find({}).sort({ _id: -1 }).limit(5));
    } catch (err) {
        res.status(500).json(err);
    }
}


exports.getSinglePost = async (req, res) => {
    try {
        res.status(200).json(await postModel.find({ _id: req.params.id }));
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.addPost = async (req, res) => {
    const { title, author, content } = req.params;
    try {
        db.collection('posts').insert({ _id: mongoose.Types.ObjectId(), title: title, author: author, content: content })
        res.status(200).json();
    } catch (err) {
        res.status(500).json(err);
    }
}