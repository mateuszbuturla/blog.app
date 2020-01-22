const postsController = require('./controller/postsController');

module.exports = (app) => {
    app.get('/api/posts', postsController.getAllPosts);

    app.get('/api/newposts', postsController.getNewPosts);

    app.get('/api/post/:id', postsController.getSinglePost);

    app.post('/api/addpost/:title/:author/:content', postsController.addPost);
}