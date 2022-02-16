<<<<<<< HEAD
import React from 'react'
import { Form, Button } from "react-bootstrap"
import Exams from "../data/exams.json";
import PropTypes from 'prop-types';
=======
import React, {Component} from 'react'
import PropTypes from 'prop-types'
>>>>>>> parent of 9ab68c7 (Merge branch 'main' of https://github.com/gerlinp/swe-techDive-solo into main)

export const SearchForm = ({handleOnChange, str}) => {
  console.log(str)
  return (

<<<<<<< HEAD
  <div className="dash-form">
    <Form className='center'>
      <input 
        type="text"
        placeholder="SEARCH Patient ID"
        name="searchStr"
        onChange={handleOnChange}
        value={str}
      />
      <Button className="add-button">
        Add Exam +
      </Button>  
    </Form>
    <div className="search-info text-center">Total Exams: {Exams.length} </div>
    </div>
  
  );
=======
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
      <form className='center' onSubmit={this.handleSubmit}>
        <input 
          type="text"
          ref={this.playerInput}
          placeholder="Enter Exam info"
        />
        <input 
          type="submit"
          value="Search"
        />
      </form>
    );
  }
>>>>>>> parent of 9ab68c7 (Merge branch 'main' of https://github.com/gerlinp/swe-techDive-solo into main)
}

SearchForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired
}