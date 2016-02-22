var React = require('react');

var ArticleInputFormComponent = React.createClass({
  getInitialState: function() {
    return {id: '', text: ''};
  },

  handleArticleChange: function(e) {
    this.setState({title: e.target.value});
  },

  render: function() {
    return (
      <div className="articleInputForm">
        <form className="articleForm">
          <input type="text"
                 placeholder="Enter URL"
                 value={this.state.title}
          />
        </form>
      </div>
    );
  }
});

module.exports = ArticleInputFormComponent;
