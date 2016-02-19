var React = require('react');
var ArticleListComponent = require('./ArticleListComponent.jsx');
var ArticleInputFormComponent = require('./ArticleInputFormComponent.jsx');

/* var ArticleTrackerActions = require('../actions/ArticleTrackerActions.jsx'); */

var ArticleTrackerComponent = React.createClass({

  getInitialState: function() {
    return {data: []};
  },

  loadArticlesFromServer: function() {
    $.ajax({
      url: '/api/articles',
      datatype: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this.loadArticlesFromServer();
  },

  render: function() {
    return (
      <div className="articleTracker">
        <h1>Article Tracker</h1>
        <h2>Article URL</h2>
        <form className="articleForm">
          <input type="text"></input>
        </form>
        <ArticleInputFormComponent/>
        <ArticleListComponent data={this.state.data}/>
      </div>
    );
  }
});

module.exports = ArticleTrackerComponent;
