const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CommentSchema = new Schema({
  userID: {
    type: String,
    required: true
  },
  bookID: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
});

module.exports = Comment = mongoose.model('comment', CommentSchema);
