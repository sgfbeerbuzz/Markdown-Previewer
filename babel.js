var MarkdownEditor = React.createClass({ getInitialState: function() { return {value: ""}; }, handleChange: function() { this.setState({value: this.refs.textarea.value}); }, rawMarkup: function() { return { __html: marked(this.state.value,
  {sanitize: true}) }; }, render: function() { return (
  <div className="MarkdownEditor">
    <textarea onChange={this.handleChange} ref="textarea" defaultValue={this.state.value} class="col-xs-6" id="markdown"/>
    <div className="content"class="col-xs-6" id = "markdownOutput" dangerouslySetInnerHTML={this.rawMarkup()} />
  </div>
  ); } }); 
  ReactDOM.render(
  <MarkdownEditor />, document.getElementById('markdownEditor'))
