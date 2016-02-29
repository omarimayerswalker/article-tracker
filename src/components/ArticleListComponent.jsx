var React = require('react');
var ArticleComponent = require('../components/ArticleComponent.jsx');

var ArticleListComponent = React.createClass({
  deleteArticle: function(e) {
    var targetedArticleId = e.target.id;
    console.log(targetedArticleId);
  },
  render: function() {
    var articleList = this;
    var articles = this.props.data.map(function(article) {
      return (
        <a className="list-group-item" href={article.url} key={article._id}><ArticleComponent title={article.title}/><span className="badge"><span onClick={articleList.deleteArticle} id={article._id} className="glyphicon glyphicon-remove"></span></span></a>
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
