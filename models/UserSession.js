const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSessionSchema = new Schema({
  userId: {
    type: String,
    default: ''
  },
  timestamp: {
    type: Date,
    defaut: Date.now
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

module.exports = UserSession = mongoose.model('UserSession', UserSessionSchema);
