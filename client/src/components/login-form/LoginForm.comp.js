import React from 'react'
import {Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const LoginForm = () => {
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <h1>IDRC</h1>
          <hr/>
          <Button as={Link} to="/exam-list">EXAM</Button>
          <Button as={Link} to="/admin-list">ADMIN</Button>
        </Col>
      </Row>
    </Container>
  )
}