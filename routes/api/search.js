const express = require('express');
const router = express.Router();

// Book Model
const Book = require('../../models/Books.js');

// @route GET api/search
// desc GET search item
// @access Public
router.get('/', (req, res) => {
  const book = req.query.book;
  const type = req.query.type;
  if(type === 'name') {
    Book.find({
      name: {
        $regex: new RegExp(book)
      }
    }, {}, (err, data) => {
      res.json(data);
    }).limit(10);
  }
  if(type === 'category') {
    Book.find({
      category: {
        $regex: new RegExp(book)
      }
    }, {}, (err, data) => {
      res.json(data);
    }).limit(10);
  }
  if(type === 'price') {
    let start = parseInt(book[0] + book[1]);
    let finish = parseInt(book[3] + book[4]) + 1;
    Book.find({
      price: { $gt: start, $lt: finish}
    }, {}, (err, data) => {
      res.json(data)
    }).limit(10);
  }
  if(type === 'rating') {
    Book.find({
      rating: book
    }, {}, (err, data) => {
      res.json(data)
    }).limit(10);
  }
});


// @route GET api/search/cate
// desc GET search category
// @access Public
router.get('/category/', (req, res) => {
  const cate = req.query.cate;
  Book.find({
    category: {
      $regex: new RegExp(cate)
    }
  }, {}, (err, data) => {
    res.json(data);
  }).limit(10);
});


module.exports = router;
