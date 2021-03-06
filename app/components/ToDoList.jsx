var React = require('react');
var AddButton = require('./AddButton.jsx');
var Task = require('./Task.jsx');

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


class ToDoList extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <div className="ToDoTitle"> AGENDA </div>
          <AddButton onClick={this.props.onClick} />
          <ul>
            {fakeData.map((task, index) =>
              <Task data={task} key={index}/>
            )}
          </ul>
      </div>
      )
  }

}

module.exports = ToDoList;