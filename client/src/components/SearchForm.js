// import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
import Exams from "../data/exams.json";
import PropTypes from 'prop-types';
import history from '../History';
import { Link } from "react-router-dom";

export const SearchForm = ({handleOnChange, str}) => {

  return (
    <div className="dash-form">
      <Form className='center'>
        <input 
          autocomplete="off"
          type="text"
          placeholder="Search..."
          name="searchStr"
          onChange={handleOnChange}
          value={str}
        />
        {/* <Button className="add-button">Add Exam +</Button>   */}
        <Link to="/create-exam">
          <Button className="exam-btn add-button">Add Exam + </Button> 
        </Link>
      </Form>
    </div>
  );
}

SearchForm.propTypes = {
  handleOnChange:PropTypes.func.isRequired,
  str:PropTypes.string.isRequired
}