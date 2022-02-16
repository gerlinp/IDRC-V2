import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Exams from "../data/exams.json";

class AddPlayerForm extends Component {

  static propTypes = {
    addPlayer: PropTypes.func
  };

  playerInput = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.playerInput.current.value);
    e.currentTarget.reset();
  }

  render() {
    return (
      <>
        <form className='center dash-form' onSubmit={this.handleSubmit}>
          <input 
            type="text"
            ref={this.playerInput}
            placeholder="Enter Exam info"
          />
          <input className="search-button"
            type="submit"
            value="Search"
          />
        </form>
        <div className="search-info">Total Exams: {Exams.length} </div>
      </>
    );
  }
}
 
export default AddPlayerForm;