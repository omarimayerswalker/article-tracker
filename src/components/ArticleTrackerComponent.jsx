var React = require('react');
var ArticleListComponent = require('./ArticleListComponent.jsx');
var ArticleInputFormComponent = require('./ArticleInputFormComponent.jsx');

var ArticleTrackerComponent = React.createClass({

  getInitialState: function() {
    return {data: []};
  },

  loadArticlesFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  handleArticleSubmit: function(article) {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: article,
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
    setInterval(this.loadArticlesFromServer, this.props.pollInterval);
  },

  render: function() {
    return (
      <div className="articleTracker">
        <h1>Article Tracker</h1>
        <h2>Article URL</h2>
        <ArticleInputFormComponent onArticleSubmit={this.handleArticleSubmit}/>
        <ArticleListComponent data={this.state.data}/>
      </div>
    );
  }
});

module.exports = ArticleTrackerComponent;
