'use strict';

var React = require('react');

var ArticleComponent = React.createClass({
  render: function() {
    return (
      <div className="article">
        {this.props.title}
      </div>
    );
  }
});

module.exports = ArticleComponent;
