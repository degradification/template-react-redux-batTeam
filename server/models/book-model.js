const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Book = new Schema(
    {
        title: {  type: String
        },
        author: {  type: String
        },
        publication_year: {  type: Number
        },
        isbn: { type: String
        },
        publisher: {  type: String
        },
        copies: { type: Number
        },
        image_url_s: {  type: String
        },
        image_url_m: {  type: String
        },
        image_url_l: {  type: String  },
        available: {    type: Number,  required:true, trim:true,
         },
    },
    { timestamps: true },
);

module.exports = mongoose.model('books', Book);
