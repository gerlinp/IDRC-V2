import React from 'react'
import {Table} from 'react-bootstrap'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


export const ExamTable = ({exams}) => {
    // if(exams.length)
  return <Table striped bordered hover responsive>
        <thead className="table-head text-center">
            <tr>
                <th>Patient ID</th>
                <th>Exam ID</th>
                <th>Study Modality</th>
                <th>Key Findings</th>
                <th>XRAY</th>
                <th className="d-none hidden">Admin</th>
            </tr>
        </thead>
        <tbody>
        {exams.length ? (
            

        exams.map(( (row, index) =>        
            <tr className="table-row text-center" key={row._id.$oid}>
                <td>
                <Link to={`/exam/${index}`}>
                    <button className="table-button"> 
                        {row.patient_Id}
                    </button>
                </Link>
                </td>
                <td>
                    <Link to={`/exam/${index}`}>
                        <button className="table-button"> 
                            {row.exam_Id}
                        </button>
                    </Link>
                </td>
                <td>{row.study_modality}</td>
                <td>{row.key_findings}</td>
  
                <td><img className="" src={row.png_filename} alt="xray"/></td>
                <td className="hidden d-none">
                    <button className='table-button edit-btn'>Edit</button>
                    <button className='table-button delete-btn'>Delete</button>         
                </td>
            </tr>
            ))
            ) : (
            <tr>
                <td colSpan="5" className="text-center">
                No Exam to show{" "}</td>
            </tr>
            )
        }

        </tbody>
    </Table>
};

ExamTable.propTypes = {
   exams: PropTypes.array.isRequired
};

