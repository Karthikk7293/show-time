import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

import Login from '../components/login/Login.jsx'

function LoginScreen() {
    return (

        <Container fluid>
            <Row className='m-auto'>
                <Col className='mx-auto' lg={3}>
                    <Login />
                </Col>
            </Row>
        </Container>
    )
}

export default LoginScreen