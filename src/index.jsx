var React         = require('react');
var ReactDOM      = require('react-dom');
var ArticleTrackerComponent = require('./components/ArticleTrackerComponent.jsx');

ReactDOM.render(
  <ArticleTrackerComponent url="/api/articles" pollInterval={1000}/>,
  document.getElementById("react-container")
);
