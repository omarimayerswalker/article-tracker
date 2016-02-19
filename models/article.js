'use strict';

var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
  characterId: {type: String, unique: true, index: true},
  title: String,
  url: String
});

module.exports = mongoose.model('Article', articleSchema);
