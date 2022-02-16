import React from 'react'
import {Table} from 'react-bootstrap'

export const ExamTable = ({exams}) => {
  return <Table striped bordered hover responsive>
        <thead className="table-head">
            <tr>
                <th>Patient</th>
                <th>Exam ID#:</th>
                <th>Study Modality</th>
                {/* <th>Key Findings</th> */}
                <th>Details</th>
            </tr>
        </thead>
        <tbody>
        {exams.length ? (
            

        exams.map(( (row, index) =>        
            <tr key={index}>
                <td>{row.patient_Id}</td>
                <td>{row.exam_Id}</td>
                <td>{row.study_modality}</td>
                {/* <td>{row.key_findings}</td> */}
                <td><button className='table-button'>Details</button></td>
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
}

export default ExamTable.comp

