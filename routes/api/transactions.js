const express = require('express');
const router = express.Router();

// Transaction Model
const Transaction = require('../../models/Transaction.js');
// UserSession Model
const UserSession =require('../../models/UserSession.js');

// @route GET api/transactions
// desc GET All transactions
// @access Private
router.get('/', (req, res) => {
  Transaction.find()
    .sort({date: -1})
    .then(transactions => res.json(transactions))
});

// @route POST api/transactions
// desc Create A Post
// @access Public
router.post('/', (req, res) => {
  console.log(req.body.id);
  UserSession.findById(req.body.id)
    .then(Session => {
      console.log(Session);
      const newTransaction = new Transaction({
          usernameID: Session.userId,
          email: req.body.email,
          phone: req.body.phone,
          address: req.body.address,
          orderBook: req.body.name,
          count: req.body.count,
          price: req.body.price
      });
      newTransaction.save()
      .then(transaction => res.json(transaction))
      .catch(err => console.log(err));
    })
});

// @route DELETE api/items
// desc Delete An Item
// @access Public
router.delete('/:id', (req, res) => {
  const item = req.params.id;
  Item.findById(item)
    .then(item => item.remove(item).then(() => res.json({sucess: true})))
    .catch(err => res.status(404).json({success: false}));
});
module.exports = router;
