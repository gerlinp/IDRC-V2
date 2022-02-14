import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { ExamTable } from "../../components/exam-table/ExamTable.comp";

export const  Dashboard = () => {
  return (
    <Container>
        <Row>
           <Col className="text-center mt-5 mb-2">
               <Button style={{'fontSize':'2rem', padding: '10px 30px'}}>
                   Add New Exam
               </Button>
           </Col> 
        </Row>
        <Row>
           <Col className="text-center mt-5 mb-2">
                <div>Total Tickets: 50</div>
           </Col> 
        </Row>
        <Row>
           <Col className="mt-2">
                <div>Recently Added Exams</div>
           </Col> 
        </Row>
        <hr />
        <Row>
           <Col className="recent-exam">
                <ExamTable/>
           </Col> 
        </Row>
    </Container>
  )
}

export default Dashboard