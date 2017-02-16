var React = require('react');
var AddButton = require('./AddButton.jsx');

class ChanBar extends React.Component {

  render () {
    return (
      <div className="NavBar">
      <div id="NavBarText">
      Navigation bar bitch
      </div>
      <AddButton />
      </div>
    );
  };

};

module.exports = ChanBar;