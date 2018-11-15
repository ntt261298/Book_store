const express = require('express');
const multer = require('multer');
const router = express.Router();

// Upload photo
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'public/uploads');
  },
  filename: function(req, file, cb) {
      cb(null, new Date().toISOString().replace(/:/g,'-') + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === "image/gif") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

// Item Model
const Book = require('../../models/Books.js');
const Cate = require('../../models/Cate.js');

// @route GET api/books
// desc GET All books
// @access Public
router.get('/', (req, res) => {
  Book.find()
    .sort({price: -1})
    .then(books => res.json(books))
});

// @route GET api/books/cate
// desc GET All cates
// @access Public
router.get('/cate', (req, res) => {
  Cate.find()
    .then(cates => res.json(cates))
});

// @route GET api/books/detail
// desc GET All books
// @access Public
router.get('/detail/:id', (req, res) => {
  const book = req.params.id;
  Book.findById(book)
    .then(book => {
      Cate.findById(book.cateId)
        .then(cate => {
          book.cate = cate.name;
          console.log(cate.name);
          res.json(book);
        })
    })
});


module.exports = router;
