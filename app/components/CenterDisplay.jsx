var React = require('react');
var AddTaskForm = require('./AddTaskForm.jsx');
var ToDoList = require('./ToDoList.jsx');
//Main Agenda Component

class CenterDisplay extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      now: false
    }
    this.onClickChange = this.onClickChange.bind(this);
  }

  onClickChange (event) {
    console.log('it does call this onClickChange')
    this.setState((previousState) => ({now: !previousState.now}));
  }

  render () {
    if (this.state.now === true) {
      return (
        <div className="CenterDisplay">
          <ToDoList onClick={this.onClickChange}/>
        </div>
      );
    } else {
      return (
        <div className="CenterDisplay">
          <AddTaskForm  onClick={this.onClickChange}/>
        </div>
        );
    }
  };

};

module.exports = CenterDisplay;