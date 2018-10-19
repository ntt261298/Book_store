const express = require('express');
const router = express.Router();

// Transaction Model
const Transaction = require('../../models/Transaction.js');
// UserSession Model
const UserSession = require('../../models/UserSession.js');

// @route GET api/user
// desc GET All userItem
// @access Public
router.get('/', (req, res) => {
  // Get the token
  const { query } = req;
  const { token } = query;
  //?token=test

  UserSession.findById(token)
    .then(session => {
      Transaction.find({ 'usernameID': session.userId })
        .then(transactions => res.json(transactions))
    })
});

module.exports = router;
