var React = require('react');
var ArticleComponent = require('../components/ArticleComponent.jsx');

var ArticleListComponent = React.createClass({
  render: function() {
    var articles = this.props.data.map(function(article) {
      return (
        <li className="list-group-item"><a href={article.url} key={article._id}><ArticleComponent title={article.title}/></a></li>
      );
    });
    return (
      <ul className="articleList list-group">
        {articles}
      </ul>);
  }
});

module.exports = ArticleListComponent;
