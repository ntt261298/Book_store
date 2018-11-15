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
  let allComment = [];
  Comment.find()
    .sort({date: -1})
    .then(comments => {
      comments.forEach(comment => {
      User.findById(comment.userID)
        .then(user => {
          const resComment = comment.toObject();
          resComment.name = user.toObject().name;
          allComment.push(resComment);
          if(allComment.length === comments.length) {
            res.json(allComment);
          }
        })
    });
  })
});

// @route POST api/comment
// desc Create A Post
// @access Public
router.post('/', (req, res) => {
  UserSession.findById(req.body.token)
    .then(Session => {
      // Comment.find({'userID': Session.userId, 'bookID': req.body.bookID})
      //   .then
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
