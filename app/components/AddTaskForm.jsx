var React = require('react');
var BackButton = require('./BackButton.jsx');
var TaskField = require('./TaskField.jsx');

class AddTaskForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
      description: '',
      dueDate: ''
    }
    this.onChangeTaskName = this.onChangeTaskName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDueDate = this.onChangeDueDate.bind(this);
  }

  onChangeTaskName (event) {
    this.setState({taskName: event.target.value});
  }
  onChangeDescription (event) {
    this.setState({description: event.target.value});
  }
  onChangeDueDate (event) {
    this.setState({dueDate: event.target.value});
  }

  handleSubmit (event) {
    event.preventDefault();
    console.log('submitting your task');
  }

  render () {
    return (
        <div>
          <TaskField value="Task Name:" onChange={this.onChangeTaskName}/>
          <TaskField value="Description:" onChange={this.onChangeDescription}/>
          <TaskField value="Due Date:" onChange={this.onChangeDueDate}/>
          <BackButton onClick={this.props.onClick}/>
          <input type="submit" onSubmit={this.handleSubmit}/>
        </div>
      )
  }

}

module.exports = AddTaskForm;