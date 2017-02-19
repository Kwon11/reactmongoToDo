var React = require('react');

class TaskField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
  }



  render () {
    return (
        <form className="TaskField" onSubmit={this.handleSubmit}>
        {this.state.value}
        <input className="TaskFieldValue" type="text" value={this.state.value} onChange={this.props.onChange} />
        </form>
      )
  }

}

module.exports = TaskField;