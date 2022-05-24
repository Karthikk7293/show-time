import React,{ useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'

import Banner from '../components/banner/Banner.jsx'
import Header from '../components/header/Header.jsx'
import Footer from '../components/footer/Footer.jsx'
import Card from '../components/card/Card.jsx'
import { useNavigate } from 'react-router-dom'

function HomeScreen() {
    
    
    return (
        <>
           <Header/>
            <Container className='py-5' fluid>
                <Row>
                    <Banner  />
                </Row>
            </Container>
            <Container className='px-5' fluid>
                <div className="trending-card-title py-3 text-white">
                    <h2>TRENDING VIDEOS</h2>
                </div>
                <Row className='trending-row p-2 rounded   mx-auto' style={{ background: "linear-gradient(90.33deg, rgba(196, 196, 196, 0.22) 0.27%, rgba(196, 196, 196, 0) 99.71%)" }}>

                    <Card />
                    <Card />
                    <Card />
                    <Card />

                </Row>
            </Container>
            <Container className='px-5 ' fluid>
                <div className="trending-card-title py-3 text-white">
                    <h2>POPULAR VIDEOS</h2>
                </div>
                <Row className='trending-row p-2 rounded mx-auto ' style={{ background: "linear-gradient(90.33deg, rgba(196, 196, 196, 0) 0.27%, rgba(196, 196, 196, 0.22) 99.71%)" }}>

                    <Card />
                    <Card />
                    <Card />
                    <Card />

                </Row>
            </Container>
            <Footer/>
        </>
    )
}

export default HomeScreen