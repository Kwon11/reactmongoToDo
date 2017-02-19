var React = require('react');
var Task = require('./Task.jsx');
var AddButton = require('./AddButton.jsx');
var AddTaskForm = require('./AddTaskForm.jsx');
//Main Agenda Component

var fakeData = [
  {
    taskName: 'Laundry',
    description: 'Do the fucking laundry',
    time: '2012-04-23T18:25:43.511Z'
  },
  {
    taskName: 'Bills',
    description: 'Got bills to pay son',
    time: '2012-04-23T18:30:43.511Z'
  },
  {
    taskName: 'Overthrow ISIS',
    description: 'Freedom bitch',
    time: '2012-04-23T18:50:43.511Z'
  },
]

class CenterDisplay extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      now: true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event) {
    console.log('it does call this handleCLick')
    this.setState((previousState) => ({now: !previousState.now}));
  }

  render () {
    if (this.state.now === true) {
      return (
        <div className="CenterDisplay">
          <div className="ToDoTitle"> AGENDA </div>
          <AddButton onClick={this.handleClick} />
          <ul>
            {fakeData.map((task, index) =>
              <Task data={task} key={index}/>
            )}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="CenterDisplay">
          <AddTaskForm  onClick={this.handleClick}/>
        </div>
        );
    }
  };

};

module.exports = CenterDisplay;