var React = require('react');
var ArticleComponent = require('../components/ArticleComponent.jsx');

var ArticleListComponent = React.createClass({
  render: function() {
    var articles = this.props.data.map(function(article) {
      return (
        <ArticleComponent key={article.id}>
          {article.title}
        </ArticleComponent>
      );
    });
    return (
      <div className="articleList">
        {articles}
      </div>);
  }
});

module.exports = ArticleListComponent;
