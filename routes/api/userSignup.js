const express = require('express');
const router = express.Router();

// Item Model
const User = require('../../models/User.js');

// @route POST api/acount/signup
// desc Create A Post
// @access Public
router.post('/', (req, res) => {
  const { body } = req;
  console.log(req.body);
  const { username, password } = body;
  // Check if username or password blank
  console.log(username);
  if(!username) {
    return res.send({
      success: false,
      message: 'Error: Username cannot be blank'
    })
  };
  if(!password) {
    return res.send({
      success: false,
      message: 'Error: Password cannot be blank'
    })
  }
  // Check if username doesn't exist
  User.find({
    username: username
  }, (err, previousUser) => {
    if(err) {
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    } else if (previousUser.length > 0) {
      return res.send({
        success: false,
        message: 'Error: Username already exist '
      });
    }
  });

  const newUser = new User({
      username: req.body.username,
      password: req.body.password
  });
  newUser.save()
  .then(user => res.json(user))
  .catch(err => console.log(err));
});

module.exports = router;
