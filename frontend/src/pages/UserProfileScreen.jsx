import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Sidebar from '../components/sidebar/Sidebar'
import './pages.css'
import SuggestionsCard from '../components/suggestionCard/SuggestionsCard';

function UserProfileScreen() {

  return (
    <>
            <Header />
            <Container className='py-5' fluid>
                <Row className='mx-auto my-4 '>
                    <Col className=' mx-auto ' lg={2} style={{width:"22%"}}>
                      <Sidebar/>
                    </Col>
                    <Col lg={9} className="ms-auto my-saved-videos rounded">
                        <div className=" px-3 my-3 ">
                            <p className=" text-white h4">MY SAVED VIDEOS</p>
                        </div>
                        <Row>
                          
                          <Col lg={3}><SuggestionsCard profile/></Col>
                          <Col lg={3}><SuggestionsCard profile/></Col>
                          <Col lg={3}><SuggestionsCard profile/></Col>
                          <Col lg={3}><SuggestionsCard profile/></Col>
                          <Col lg={3}><SuggestionsCard profile/></Col>
                          <Col lg={3}><SuggestionsCard profile/></Col>
                          <Col lg={3}><SuggestionsCard profile/></Col>
                          <Col lg={3}><SuggestionsCard profile/></Col>
                          <Col lg={3}><SuggestionsCard profile/></Col>
                          <Col lg={3}><SuggestionsCard profile/></Col>
                          <Col lg={3}><SuggestionsCard profile/></Col>
                          <Col lg={3}><SuggestionsCard profile/></Col>
                          <Col lg={3}><SuggestionsCard profile/></Col>
                          <Col lg={3}><SuggestionsCard profile/></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
  )
}

export default UserProfileScreen