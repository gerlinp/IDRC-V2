import React from 'react'
import {Table} from 'react-bootstrap'

export const ExamTable = () => {
  return <Table striped bordered hover responsive>
        <thead>
            <tr>
                <th>Patient</th>
                <th>Exam ID#:</th>
                <th>Image Study Description</th>
                <th>Key Findings</th>
                <th>Details</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>COVID-19-AR-16434409</td>
                <td>Exam-1</td>
                <td>XR CHEST AP PORTABLE</td>
                <td>Subtle patchy bibasilar and right upper lobe airspace  opacities</td>
                <td><button>Details</button></td>
            </tr>
            <tr>
                <td>COVID-19-AR-16434409</td>
                <td>Exam-1</td>
                <td>XR CHEST AP PORTABLE</td>
                <td>Subtle patchy bibasilar and right upper lobe airspace  opacities</td>
                <td><button>Details</button></td>
            </tr>
            <tr>
                <td>COVID-19-AR-16434409</td>
                <td>Exam-1</td>
                <td>XR CHEST AP PORTABLE</td>
                <td>Subtle patchy bibasilar and right upper lobe airspace  opacities</td>
                <td><button>Details</button></td>
            </tr>
        </tbody>
    </Table>
}

export default ExamTable.comp

// brixia: "1,2,3,4",
// age: 44,
// sex: "m",
// bmi:"33.3",
// zip: 722