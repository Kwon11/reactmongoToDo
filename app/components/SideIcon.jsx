var React = require('react');
//Main Agenda Component

class SideIcon extends React.Component {

  render (props) {
    return (
      <div className="SideIcon">
      <img src="calendar.png" className="calendarPic"></img>
      Make this render whatever isn't the CenterDisplay
      <button id="SideButton"> Click for {this.props.current} </button>
      </div>
    );
  };

};

module.exports = SideIcon;