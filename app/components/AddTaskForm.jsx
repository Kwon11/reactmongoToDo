var React = require('react');
var BackButton = require('./BackButton.jsx');

class AddTaskForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'whatever bitch'
    }
    this.onChange = this.onChange.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    console.log('whatever dude');
  }

  onChange (event) {
    this.setState({value: event.target.value})
  }

  render () {
    return (
        <div className="AddTaskForm">
          <form className="CenterDisplay" onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.onChange} />
          </label>
          <input type="submit" value="Submit" onSubmit={this.handleSubmit}/>
          </form>
          <BackButton/>
        </div>
      )
  }

}

module.exports = AddTaskForm;