var React = require('react');

class BackButton extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
        <button className="test">
        Cancel like a quitter
        </button>
      )
  }

}

module.exports = BackButton;