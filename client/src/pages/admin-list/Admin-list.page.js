
import React, {useState, useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp"
import { ExamTable } from '../../components/exam-table/ExamTable.comp'
import {SearchForm} from "../../components/SearchForm"
import exams from "../../data/exams.json";



export const AdminList = ({results}) => {
  
  const [str,setStr] = useState("");
  const [displayExams,setDisplayExam] = useState(exams);

  useEffect(() => {},[str, displayExams]);
  
  const handleOnChange = (e) => {
    const { value } =  e.target;
    console.log(value);
    setStr(value);
    searchExam(value)
  };

  const searchExam = (sttr) => {
    const displayExams = exams.filter((row) => 
      row.patient_Id.toUpperCase().includes(sttr.toUpperCase())
    );
    console.log(displayExams)
    setDisplayExam(displayExams)
  };

  const resultCount = () => {
    const results = this.state.result;
    return results;
  }

  return (
    <Container className="admin">
      <Row>
        <Col>
          <PageBreadcrumb page="Exam list"/>
        </Col>
      </Row>
      <SearchForm className="text-center admin" handleOnChange={handleOnChange} str={str}  />
      <Row>
        <Col>
        <div className="search-info text-center">Total Exams: {displayExams.length}</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <ExamTable className="admin" exams={displayExams}/>
        </Col>
      </Row>
    </Container>
  )
}
 