const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Book = new Schema(
    {
        title: {  type: String, required: true
        },
        author: {  type: String, required:false
        },
        publication_year: {  type: Number, required:false
        },
        isbn: { type: String, required:true
        },
        publisher: {  type: String, required:false
        },
        copies: { type: Number, required:false
        },
        image_url_s: {  type: String, required:false
        },
        image_url_m: {  type: String, required:false
        },
        image_url_l: {  type: String, required:false  },
        available: {    type: Number,  required:false, trim:true
         },
    },
    { timestamps: true },
);

Book.virtual('url').get(function(){return '/books/' + this._id;});

module.exports = mongoose.model('books', Book);
