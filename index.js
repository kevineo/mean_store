var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/test');
mongoose.Promise = global.Promise;


//1.Declare User Model, schema, mongodb collection name
var User = mongoose.model('User', schema, 'users');

var user = new User({
  name: 'Kevin Ong',
  email: 'dev.kevineo@gmail.com'
});

user.save(function(error) {
  if (error) {
    console.log(error);
    process.exit(1);
  }
  User.find({ email: 'dev.kevineo@gmail.com'}, function (error, docs) {
    if (error) {
      console.log(error);
      process.exit(1);
    }
    console.log(require('util').inspect(docs));
    process.exit(0);
  });
});