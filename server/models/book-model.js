const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Book = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        publication_year: {
            type: Number,
            required: true
        },
        ISBN: {
            type: Number,
            required: true
        },
        publisher: {
            type: String,
        },
        copies: {
            type: Number,
        },
        image_url_s: {
            type: String
        },
        image_url_m: {
            type: String
        },
        image_url_l: {
            type: String
        },
        available: {
            type: Number
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model('book', Book);

