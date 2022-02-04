const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  user_no: {
    type: String
  },
  name: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phrase: {
    type: String
  },
  avatar: {
    type: String
  },
  uid: {
    type: String,
    unique: true
  },
  blocked: {
    type: Boolean,
    default: false
  },
  ip: {
    type: String
  },
  status: {
    type: String
  },
  acceptStatus: {
    type: String
  },
  attendStatus: {
    type: Boolean,
    default: false
  },
  pin: {
    type: Boolean,
    default: false
  },
  country: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('user', UserSchema);
