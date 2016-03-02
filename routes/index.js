'use strict';

var express = require('express');
var router = express.Router();
var Article = require('../models/article');
var urlTitle = require('url-to-title');

/** GET home page. */
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
 * DELETE /api/articles/remove
 * Delete selected article
 */

router.post('/api/articles/remove', function(req, res, next) {
  var toDeleteUrl = req.body.url;

  Article.findOne({url: toDeleteUrl}, function(err, article) {
    if (err) {return next(err);}

    if (!article) {
      return res.send([{title: 'Article not found'}]);
    } else {
      article.remove();
    }
  });

});

/**
 * POST /api/articles
 * Inserts new article or Searches articles by input
 */

router.post('/api/articles', function(req, res, next) {
  var input = req.body.title;

  urlTitle(input, function(err, urlName) {
    if(!err) {
      var newArticle = new Article({
        title: urlName,
        url: input
      });

      newArticle.save(function(err) {
      });
    } else {
      Article.search(input, function(err, searchResults) {
        if(!err) {
          var results = [];
          for(var i = 0; i < searchResults.length; i++) {
            results.push({_id: searchResults[i].id,
                          title: searchResults[i].title,
                          url: searchResults[i].url
                         });
          }
          return res.send(results);
        }
      });
    }
  });
});

module.exports = router;
