var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  profile: {
    username: {
      type: String,
      required: true,
      lowercase: true
    },
    picture: {
      type: String,
      required: true,
      match: /^http:\/\//i
    }
  },
  email: {
    type: String,
    required: true,
    match: /.+@.+\..+/,
    lowercase: true
  },
  loggedInCount: {
    type: Number,
    default: 0
  }
});