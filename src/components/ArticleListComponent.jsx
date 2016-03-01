var React = require('react');
var ArticleComponent = require('../components/ArticleComponent.jsx');

var ArticleListComponent = React.createClass({
  deleteArticle: function(e) {
    e.preventDefault();
    var targetedArticleId = e.target.id;
    if (!targetedArticleId) {return;}

    this.props.onArticleRemoval({url: targetedArticleId});
  },
  render: function() {
    var articleList = this;
    var articles = this.props.data.map(function(article) {
      return (
        <a className="list-group-item" href={article.url} key={article._id}><ArticleComponent title={article.title}/><span className="badge"><span onClick={articleList.deleteArticle} id={article.url} className="glyphicon glyphicon-remove"></span></span></a>
      );
    });
    return (
      <div className="articleList list-group">
        {articles}
      </div>
    );
  }
});

module.exports = ArticleListComponent;
