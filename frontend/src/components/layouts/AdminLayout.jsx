import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../header/Header'
import Footer from '../footer/Footer'

import './layout.css'

function AdminLayout({ children }) {

    return (
        <div className='pt-5 my-5'>
            <Header admin />
            <Container style={{ minHeight: "90vh" }} fluid>
                <Row className='px-3'>
                    <Col className='admin-sidebar  shadow' lg={3}>
                        <h1>hai</h1>
                    </Col>
                    <Col className='admin-main-container  shadow mx-auto p-3' lg={9}>
                        {children}
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default AdminLayout