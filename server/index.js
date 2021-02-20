/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const router = express.Router();

const db = require('./db');
const bookRouter = require('./routes/book-router');

const app = express();
const apiPort = process.env.apiPort || 'https://localhost:3000/books';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/books', bookRouter);

app.listen(apiPort, () => {
    console.log(` Server running on port ${apiPort}`);
});
