import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate ,Link} from 'react-router-dom';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Sidebar from '../components/sidebar/Sidebar'
import SuggestionsCard from '../components/suggestionCard/SuggestionsCard';
import './pages.css'

function UserProfileScreen() {

  const navigate = useNavigate()

  useEffect(() => {

    let userData = localStorage.getItem("userData");
    userData = JSON.parse(userData)
    if (!userData) {
      navigate('/login')
    }

  }, [navigate])



  return (
    <>
      <Header />
      <Container className='py-5 mt-5' fluid>
        <Row className='mx-auto my-4 '>
          <Col className=' mx-auto ' lg={2} style={{ width: "22%" }}>
            <Sidebar />
          </Col>
          <Col lg={9} className="ms-auto my-saved-videos rounded">
            <div className=" px-3 my-3 d-flex justify-content-between ">
              <p className=" text-white h4">MY SAVED VIDEOS</p>
             <Link to={'/user/dashboard'}><p className=" text-white bg-danger rounded shadow px-3 py-2 cursor-pointer">GO TO DASHBOARD</p></Link>
            </div>
            <Row>

              <Col  lg={3}><SuggestionsCard profile /></Col>
              <Col lg={3}><SuggestionsCard profile /></Col>
              <Col lg={3}><SuggestionsCard profile /></Col>
              <Col lg={3}><SuggestionsCard profile /></Col>
              <Col lg={3}><SuggestionsCard profile /></Col>
              <Col lg={3}><SuggestionsCard profile /></Col>
              <Col lg={3}><SuggestionsCard profile /></Col>
              <Col lg={3}><SuggestionsCard profile /></Col>
              <Col lg={3}><SuggestionsCard profile /></Col>
              <Col lg={3}><SuggestionsCard profile /></Col>
              <Col lg={3}><SuggestionsCard profile /></Col>
              <Col lg={3}><SuggestionsCard profile /></Col>
              <Col lg={3}><SuggestionsCard profile /></Col>
              <Col lg={3}><SuggestionsCard profile /></Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default UserProfileScreen