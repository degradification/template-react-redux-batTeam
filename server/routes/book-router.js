const express = require('express');

const BookController = require('../controllers/book-controller');

const router = express.Router();
let Books = require("../models/book-model");

router.get('/books', BookController.getBooks);
router.get('/book/:id', BookController.getBookById);
router.post('/book', BookController.createBook);
router.put('/book/:id', BookController.updateBook);
router.delete('/book/:id', BookController.deleteBook);

module.exports = router;
