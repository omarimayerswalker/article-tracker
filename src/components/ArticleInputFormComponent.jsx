var React = require('react');

var ArticleInputFormComponent = React.createClass({
  render: function() {
    return (
      <div className="articleInputForm">
        {this.props.message}
      </div>);
  }
});

module.exports = ArticleInputFormComponent;
