
import React, {useState, useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp"
import { ExamTable } from '../../components/exam-table/ExamTable.comp'
import {SearchForm} from "../../components/SearchForm"
import exams from "../../data/exams.json";


export const ExamList = ({results}) => {
  
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

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Exam list"/>
        </Col>
      </Row>
      <SearchForm className="text-center" handleOnChange={handleOnChange} str={str} results={results} />
      <Row>
        <Col>
          <ExamTable exams={displayExams}/>
        </Col>
      </Row>
    </Container>
  )
}
