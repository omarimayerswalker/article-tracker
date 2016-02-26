var React = require('react');
var ArticleComponent = require('../components/ArticleComponent.jsx');

var ArticleListComponent = React.createClass({
  render: function() {
    var articles = this.props.data.map(function(article) {
      return (
        <a href={article.url} key={article._id}><ArticleComponent title={article.title}/></a>
      );
    });
    return (
      <div className="articleList">
        {articles}
      </div>);
  }
});

module.exports = ArticleListComponent;
