var React         = require('react');
var ReactDOM      = require('react-dom');
/* var TestComponent = require('./components/TestComponent.jsx'); */
var ArticleTrackerComponent = require('./components/ArticleTrackerComponent.jsx');

ReactDOM.render(
  <ArticleTrackerComponent />,
  document.getElementById("react-container")
);
