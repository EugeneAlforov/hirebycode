var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var repoScheme = new Schema({
  developer: String,
  name: String,
  languages: [String],
  description: String,
  skills: [String]
});

// the schema is useless so far
// we need to create a model using it
var Repo = mongoose.model('Repo', repoScheme);

// make this available to our users in our Node applications
module.exports = Repo;