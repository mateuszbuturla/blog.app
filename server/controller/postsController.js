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

exports.addPost = (req, res) => {
    console.log('add post')
}