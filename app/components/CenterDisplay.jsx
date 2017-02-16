var React = require('react');
var task = require('./Task.jsx')
//Main Agenda Component

var fakeData = [
  {
    taskName: 'Laundry',
    description: 'Do the fucking laundry'
    time: 2012-04-23T18:25:43.511Z
  },
  {
    taskName: 'Bills',
    description: 'Got bills to pay son'
    time: 2012-04-23T18:30:43.511Z
  },
  {
    taskName: 'Overthrow ISIS',
    description: 'Freedom bitch'
    time: 2012-04-23T18:50:43.511Z
  },
]

class CenterDisplay extends React.Component {

  render () {
    return (
      <div className="CenterDisplay">
      <div className="ToDo Title"> AGENDA </div>
      <ul>
        {fakeData.map((task) =>
          <task data={task}/>
        )}
      </ul>
      </div>
    );
  };

};

module.exports = CenterDisplay;