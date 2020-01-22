const postsController = require('./controller/postsController');

module.exports = (app) => {
    app.post('/api/posts', postsController.getAllPosts);

    app.post('/api/newposts', postsController.getNewPosts);

    app.post('/api/post/:id', postsController.getSinglePost);

    app.post('/api/addpost/:title/:author/:content', postsController.addPost);
}