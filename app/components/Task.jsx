var React = require('react');

class Task extends React.Component {

  constructor(props) {
    super(props);
  }

  render (props) {
    return (
        <div className="Task">
        <div> {this.props.data.taskName} </div>
        <div className="taskName"> {this.props.data.taskName} </div>
        <div className="taskDescription">{this.props.data.description} </div>
        <div className="taskTime">{this.props.data.time} </div>
        </div>
      )
  }

}

module.exports = Task;