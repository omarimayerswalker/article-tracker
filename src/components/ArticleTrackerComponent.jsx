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
      url: this.props.url + '/add',
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

  handleArticleRemoval: function(article) {
    $.ajax({
      url: this.props.url + '/remove',
      dataType: 'json',
      type: 'POST',
      data: article,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url + '/remove', status, err.toString());
      }.bind(this)
    });
    this.forceUpdate(this.loadArticlesFromServer);
  },

  componentDidMount: function() {
    this.loadArticlesFromServer();
  },

  render: function() {
    return (
      <div className="articleTracker">
        <ArticleInputFormComponent onArticleSubmit={this.handleArticleSubmit} onHandleReset={this.loadArticlesFromServer}/>
        <ArticleListComponent data={this.state.data} onArticleRemoval={this.handleArticleRemoval}/>
      </div>
    );
  }
});

module.exports = ArticleTrackerComponent;
