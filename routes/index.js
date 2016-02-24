'use strict';

var express = require('express');
var router = express.Router();
var Article = require('../models/article');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Main' });
});

/**
 * GET /api/articles
 * Returns all articles
 */

router.get('/api/articles', function(req, res, next) {
  Article.find()
    .exec(function(err, articles) {
      if (err) {return next(err);}

      if (articles.length > 0) {
        return res.send(articles);
      } else {
        return res.send([{title: 'No articles have been added'}]);
      }
    });
});

/**
 * POST /api/articles
 * Inserts new article
 */

router.post('/api/articles', function(req, res, next) {
  var title = req.body.title;
  var newArticle = new Article({
    title: title
  });
  console.log(newArticle);
  newArticle.save(function(err) {
  });
});

module.exports = router;
