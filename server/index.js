/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const router = express.Router();
const path = require('path');
const apiPort = 3000;
const db = require('./db');
const app = express();
const bookRouter = require('./routes/book-router');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) =>{
  res.send("The Server is Up and Running");
});

app.use('/books', bookRouter);

app.listen(apiPort, () => {
    console.log(` Server running on port ${apiPort}`);
});
