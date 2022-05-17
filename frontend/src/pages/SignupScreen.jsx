import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

import Signup from '../components/signup/Signup'


function SignupScreen() {
  return (
    <Container fluid>
            <Row className='m-auto'>
                <Col className='mx-auto' lg={3}>
                    <Signup/>
                </Col>
            </Row>
        </Container>
  )
}

export default SignupScreen