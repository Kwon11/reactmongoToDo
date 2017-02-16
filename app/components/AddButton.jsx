var React = require('react');

class AddButton extends React.Component {

  constructor (props) {
    super(props);
  }

  // handleClick (event) {
  //   event.preventDefault(); otherwise the click will go up
  // }
  render () {
    return (
        <button id="AddButton">
        Add A task you lazy shit
        </button>
      ); //clickhandlers here need e.preventDefault()
  };

};

module.exports = AddButton;