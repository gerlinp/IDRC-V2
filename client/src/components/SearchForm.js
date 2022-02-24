import React from 'react'
import { Form, Button } from "react-bootstrap"
import Exams from "../data/exams.json";
import PropTypes from 'prop-types';
import history from '../history';

export const SearchForm = ({handleOnChange, str}) => {
  console.log(str)
  return (


    //wrap button around link component -A.M
    //https://artwilton.medium.com/adding-a-link-to-a-bootstrap-button-with-react-router-57d2f6197588
    //
    
  <div className="dash-form">
    <Form className='center'>
      <input 
        type="text"
        placeholder="SEARCH Patient ID"
        name="searchStr"
        onChange={handleOnChange}
        value={str}
      />
      <Button className="add-button">Add Exam +</Button>  
      
      <button className="exam-btn add-button" onClick={() => history.push('../CreateExam')} >Add Exam </button>
      
    </Form>
    <div className="search-info text-center">Total Exams: {Exams.length} </div>
    </div>
  
  );
}

SearchForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired
}

