'use strict';

var mongoose = require('mongoose');
var searchable = require('mongoose-searchable');

var articleSchema = new mongoose.Schema({
  title: String,
  url: String
});

articleSchema.plugin(searchable);

module.exports = mongoose.model('Article', articleSchema);
