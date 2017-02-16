var React = require('react');
var ReactDOM = require('react-dom');

var ChanBar = require('./ChanBar.jsx');
var UserProfile = require('./UserProfile.jsx');
var Calendar = require('./Calendar.jsx');
var Agenda = require('./Agenda.jsx');
var SideIcon = require('./SideIcon.jsx');
var CenterDisplay = require('./CenterDisplay.jsx');

class Main extends React.Component{
  render () {
    return (
      <div>
        <ChanBar />
        <UserProfile />
        <CenterDisplay />
        <SideIcon current={'Calendar View'} />
      </div>
    );
  };
};

ReactDOM.render(<Main />, document.getElementById('app'));