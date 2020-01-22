const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blogapp', { useNewUrlParser: true });
const db = mongoose.connection;

const serverRouter = require('./server.routes');

db.once('open', () => {
    console.log('Connected to the database');
});
db.on('error', (err) => console.log('Error ' + err));

serverRouter(app);

app.listen(3000);