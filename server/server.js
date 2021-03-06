const path = require('path');

const express = require('express');
const app = express();

const config = require('./config');

const mongoose = require('mongoose');
mongoose.connect(config.db, { useNewUrlParser: true });
const db = mongoose.connection;

global.db = db;

const serverRouter = require('./server.routes');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    next();
})

app.use(express.static(path.join(__dirname, '/../client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

db.once('open', () => {
    console.log('Connected to the database');
});
db.on('error', (err) => console.log('Error ' + err));

serverRouter(app);

app.listen(3000);