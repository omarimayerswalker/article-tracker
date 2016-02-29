'use strict';

var React = require('react');

var ArticleComponent = React.createClass({
  render: function() {
    return (
      <span className="article">
        {this.props.title}
      </span>
    );
  }
});

module.exports = ArticleComponent;
