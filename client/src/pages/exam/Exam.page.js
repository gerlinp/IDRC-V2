import React, {Component } from 'react'
import {Container, Row, Col, Button } from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import exams from "../../data/exams"



const exam = exams[11];


export const  Exam = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Exam"/>
        </Col>
        <Col className="">
          <Button className="close-button">Close Exam</Button>
        </Col>
      </Row>

      <Row className="exam-info-header text-center">
        <div>EXAM INFO</div>
      </Row>

      <Row className="exam-info">
        <Col >
          <img className="" src={exam.png_filename} alt="xray" />
        </Col>
        <Col>
        <div className="exam-info-container">
          <div className="exam-info-title">Patient:</div>
          <div>{exam.patient_Id}</div>
        </div>
        <div className="exam-info-container">
          <div className="exam-info-title">Exam ID:</div>
          <div>{exam.exam_Id}</div>
        </div>
        <div className="exam-info-container">
          <div className="exam-info-title">Study Modality:</div>
          <div>{exam.study_modality}</div>
        </div>
        <div className="exam-info-container">
          <div className="exam-info-title">Diagnosis Image Study Days:</div>
          <div>{exam.Diag_to_img_study_days}</div>
        </div>
        <div className="exam-info-container">
          <div className="exam-info-title">Diagnosis Image Time Hours</div>
          <div>{exam.Diagnosis_to_imaging_time_hrs}</div>
        </div>
        <div className="exam-info-container">
          <div className="exam-info-title">Key Findings:</div>
          <div>{exam.key_findings}</div>
        </div>

        </Col>
      </Row>
    </Container>
  )
}







