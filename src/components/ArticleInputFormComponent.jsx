var React = require('react');

var ArticleInputFormComponent = React.createClass({
  getInitialState: function() {
    return {id: '', text: ''};
  },

  handleArticleChange: function(e) {
    this.setState({title: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var title = this.state.title.trim();
    if (!title) {return;}

    // add server request
    this.props.onArticleSubmit({title: title});
    this.setState({title: ''});
  },

  render: function() {
    return (
        <form className="articleForm" onSubmit={this.handleSubmit}>
          <input type="text"
                 placeholder="Enter URL"
                 value={this.state.title}
                 onChange={this.handleArticleChange}
          />
          <input type="submit" value="Submit"/>
        </form>
    );
  }
});

module.exports = ArticleInputFormComponent;
