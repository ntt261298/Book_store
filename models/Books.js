const mongoose = require('mongoose');
const fs = require('fs');
const Schema = mongoose.Schema;

// Create Schema
const BookSchema = new Schema({
  bookImage: {
    type: String,
    required: true
  },
  contentImage: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  pagesNumber: {
    type: Number,
    required: true
  },
  company: {
    type: String,
    required: true
  },
});

module.exports = Book = mongoose.model('book', BookSchema);
