var React = require('react');
var ArticleComponent = require('../components/ArticleComponent.jsx');

var ArticleListComponent = React.createClass({
  render: function() {
    var articles = this.props.data.map(function(article) {
      return (
        <ArticleComponent title={article.title} key={article.id}/>
      );
    });
    return (
      <div className="articleList">
        {articles}
      </div>);
  }
});

module.exports = ArticleListComponent;
