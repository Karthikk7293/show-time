import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './layout.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { USER_AVATAR } from '../../assets/icons'
import Sidebar from '../sidebar/Sidebar'
import CHANNEL_BANNER from '../../assets/CHANNEL_BANNER.png'
import { useSelector } from 'react-redux'


function UserDashboardLayout({ children }) {

    const {userData} = useSelector((state)=>state.user)

    return (
        <div>
            <Header />
            <Container className='common-dashboard-container  ' >

                <Row className='mt-5'>
                    <Col lg={12}>

                        <div className="user-dashboard-banner mt-3  pt-5 d-none d-sm-none d-lg-block ">
                           {userData ? <img className='banner-image position-absolute rounded-3 ' src={userData.banner ? userData.banner.url : CHANNEL_BANNER}  alt="" /> : <img className='banner-image position-absolute rounded-3 ' src={CHANNEL_BANNER}  alt="" /> } 
                           {userData ? <img className='profile-image position-relative' src={userData.avatar ? userData.avatar.url : USER_AVATAR} alt="" /> : <img className='profile-image position-relative ' src={ USER_AVATAR} alt="" /> } 
                        </div>

                    </Col>
                    <div className="col-12 d-lg-none  d-col-block d-md-none d-sm-none ">
                        <div className=" mt-3  pt-5  text-center">
                        {userData ? <img className='banner-image mb-2 ' width={"100%"} src={userData.banner ? userData.banner.url : CHANNEL_BANNER}  alt="" /> : <img className='banner-image  ' src={CHANNEL_BANNER}  alt="" /> } 
                        {userData ? <img className='profile-image ' style={{borderRadius:"50%"}} src={userData.avatar ? userData.avatar.url : USER_AVATAR} alt="" /> : <img className='profile-image  ' src={ USER_AVATAR} alt="" /> } 
                        </div>
                    </div>
                    <Col lg={9} className=" d-flex justify-content-between my-4  ms-auto">
                        <div className="Channel-title text-white text-capitalize">

                            
                                <div className='input-tag d-flex mt-4'>
                                    <h3>{userData && userData.channel}</h3>
                                </div>
                                <p className='text-muted mx-2'>{userData?.name}</p>
                        </div>
                        <div className="navigate-to-dashboard text-uppercase mt-5   me-5">
                            <Link to={'/content/upload/video'} className="navigate-to-dashboard-link  px-4 py-2 ">

                                <span> upload videos</span><i></i>
                            </Link>
                        </div>
                    </Col>
                </Row>

            </Container>
            <Container fluid className='px-5'>
                <Row>
                    <Col lg={3} className="" >
                        <Sidebar admin />
                    </Col>
                    <Col lg={9}>
                        {children}
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default UserDashboardLayout