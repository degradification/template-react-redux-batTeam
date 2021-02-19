/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
const bookRouter = require('./routes/book-router');

const app = express();
const apiPort = process.env.airPort || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/books', bookRouter);

app.listen(apiPort, () => {
    console.log(` Server running on port ${apiPort}`);
});
