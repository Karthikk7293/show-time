import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../header/Header'
import Footer from '../footer/Footer'

import './layout.css'
import AdminSidebar from '../sidebar/AdminSidebar'

function AdminLayout({ children }) {

    return (
        <div className='pt-5 my-5'>
            <Header admin />
            <Container style={{ minHeight: "90vh" }} fluid>
                <Row className='px-3'>
                    <Col className='' lg={3}>
                        <AdminSidebar/>
                    </Col>
                    <Col className='  shadow mx-auto' lg={9}>
                        {children}
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default AdminLayout