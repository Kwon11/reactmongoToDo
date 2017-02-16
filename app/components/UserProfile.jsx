var React = require('react');

class UserProfile extends React.Component {

  render () {
    return (
      <div className="UserProfile">
      <div>
      <img className="profilePic" src="Chan Kwon.jpg"></img>
      </div>
      User Profile Bitch
      </div>
    );
  };

};

module.exports = UserProfile;