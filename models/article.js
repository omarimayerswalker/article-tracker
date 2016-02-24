'use strict';

var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
  title: String
});

module.exports = mongoose.model('Article', articleSchema);
