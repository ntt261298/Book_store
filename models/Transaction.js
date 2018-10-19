const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TransactionSchema = new Schema({
  usernameID: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  orderDate: {
    type: Date,
    default: Date.now
  },
<<<<<<< HEAD
  status: {
    type: String,
    default: 'In Processing'
  },
  cart: {
    type: Array,
    required: true
=======
  orderBook: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    default: 'In Processing'
>>>>>>> bff872c7537dadff56bfa3f2530985ab65fdffe4
  }
});

module.exports = Transaction = mongoose.model('transaction', TransactionSchema);
