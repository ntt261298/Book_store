const express = require('express');
const router = express.Router();

// Comment Model
const Comment = require('../../models/Comment.js');
// User Model
const User =require('../../models/User.js');
// Book Model
const Book =require('../../models/Books.js');

// @route GET api/comment
// desc GET All comment
// @access Public
router.get('/', (req, res) => {
  Comment.find()
    .sort({date: -1})
    .then(comment => res.json(comment))
});

// @route POST api/comment
// desc Create A Post
// @access Public
router.post('/', (req, res) => {
  UserSession.findById(req.body.token)
    .then(Session => {
      const newComment = new Comment({
          userID: Session.userId,
          bookID: req.body.bookID,
          comment: req.body.comment,
          rating: req.body.rating,
      });
      newComment.save()
      .then(comment => {
        User.findById(Session.userId)
          .then(user => {
            const resComment = comment.toObject();
            resComment.name = user.toObject().name;
            res.json(resComment);
          });
      })
      .catch(err => console.log(err));
    })
});


module.exports = router;
