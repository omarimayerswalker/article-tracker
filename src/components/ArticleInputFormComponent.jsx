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

    this.props.onArticleSubmit({title: title});
    this.setState({title: ''});
  },

  handleReset: function(e) {
    e.preventDefault();
    this.props.onHandleReset();
  },


  render: function() {
    return (
        <form className="articleForm input-group" onSubmit={this.handleSubmit}>
          <span className="input-group-addon" id="basic-addon3">https://example.com/article</span>
          <input type="text"
                 className="form-control"
                 id="basic-url"
                 aria-describedby="basic-addon3"
                 value={this.state.title}
                 onChange={this.handleArticleChange}
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="reset" onClick={this.handleReset}><span className="glyphicon glyphicon-repeat"></span></button>
            <button className="btn btn-default" type="submit" onSubmit={this.handleSubmit}>Submit</button>
          </span>
        </form>
    );
  }
});

module.exports = ArticleInputFormComponent;
