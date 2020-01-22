const postsController = require('./controller/postsController');
const commentsController = require('./controller/commentsController');

module.exports = (app) => {
    app.post('/api/posts', postsController.getAllPosts);

    app.post('/api/newposts', postsController.getNewPosts);

    app.post('/api/post/:id', postsController.getSinglePost);

    app.post('/api/addpost/:title/:author/:content', postsController.addPost);

    app.post('/api/comments/:postId', commentsController.getComments);

    app.post('/api/addcomment/:postId/:author/:content', commentsController.addComment);
}