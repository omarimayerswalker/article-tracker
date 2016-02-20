var React = require('react');

var ArticleListComponent = React.createClass({
  render: function() {
    console.log('>>>>>>>>>>>>>>>', this.props.data);
    var articles = this.props.data.map(function(article) {
      return (
        <Article key={article.id}>
          {article.title}
        </Article>
      );
    });
    return (
      <div className="articleList">
        {articles}
      </div>);
  }
});

module.exports = ArticleListComponent;
