const express = require('express');
const router = express.Router();

// Book Model
const Book = require('../../models/Books.js');

// @route GET api/search
// desc GET search item
// @access Public
router.get('/', (req, res) => {
  const book = req.query.book;
  Book.find({
    name: {
      $regex: new RegExp(book)
    }
  }, {}, (err, data) => {
    res.json(data);
  }).limit(10);
});

module.exports = router;
