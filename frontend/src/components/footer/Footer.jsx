import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './footer.css'
function Footer() {

  return (
    <div>
    <Container className='mx-0 p-0 mt-5 footer' style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover", background: "url(https://movies-b26f.kxcdn.com/wp-content/uploads/2014/11/interstellar-poster-3-580x267.jpg)" }} fluid>
      <Row className='footer-row m-0 p-0' >
        <Col lg={6} className=" text-white p-5">
          <h1 className='footer-title mx-auto'>HD P<span className='text-warning'><ion-icon name="at-circle-sharp"></ion-icon></span>PC<span>O</span>RN</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis sapiente rerum fugiat voluptatum nostrum harum fuga? Veniam vitae reiciendis excepturi, reprehenderit praesentium earum deserunt provident totam, hic natus, voluptatem harum.
          </p>
          <div className="social-icons">
            <span className='mx-2'><ion-icon name="logo-twitter"></ion-icon></span>
            <span className='mx-2'><ion-icon name="logo-instagram"></ion-icon></span>
            <span className='mx-2'><ion-icon name="logo-youtube"></ion-icon></span>
            <span className='mx-2'><ion-icon name="logo-facebook"></ion-icon></span>
          </div>
        </Col>
        <Col lg={3} className='p-5 text-white'>
          <div className="footer-about">
            <h4>ABOUT</h4>
            <p>Termas & Conditions</p>
            <p>Policy Details</p>
            <p>Copyright</p>
          </div>
        </Col>
        <Col lg={3} className='pt-5 ps-5 text-white'>
          <h3>CONTACT US</h3>
          <p><span><ion-icon name="mail"></ion-icon></span> emailaddress@gmail.com</p>
          <p><span><ion-icon name="call"></ion-icon></span>Phone:(+91)12345 09876</p>
          <p>  Palarivattam</p>
          <p> Kochin, Kerala</p>
          <p><span className='mx-2'><ion-icon name="location"></ion-icon></span>Location</p>
        </Col>
       
      </Row>
    </Container>
    <Container className='mt-3' fluid>
      <Row>
        <Col md={10} className='text-center mx-auto text-muted'>
          <p> © 2022 HD-POPCORN. All rights reserved | Designed by KARTHIK</p>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Footer