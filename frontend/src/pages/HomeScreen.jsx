import React, { lazy, Suspense } from 'react'
import { Container, Row } from 'react-bootstrap'

// import Banner from '../components/banner/Banner.jsx'
// import Header from '../components/header/Header.jsx'
// import Footer from '../components/footer/Footer.jsx'
import Loader from '../components/icons/Loader.jsx'
// import Card from '../components/card/Card.jsx'

const Banner = lazy(()=>import('../components/banner/Banner'))
const Header = lazy(()=>import('../components/header/Header'))
const Footer = lazy(()=>import('../components/footer/Footer'))
const Card = lazy(()=>import('../components/card/Card'))


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
                <Suspense  fallback={<Loader/>}>
                <Row className='trending-row p-2 rounded   mx-auto' style={{ background: "linear-gradient(90.33deg, rgba(196, 196, 196, 0.22) 0.27%, rgba(196, 196, 196, 0) 99.71%)" }}>

                    <Card />
                    <Card />
                    <Card />
                    <Card />
                 


                </Row>
                </Suspense>
            </Container>
            <Container className='px-5 ' fluid>
                <div className="trending-card-title py-3 text-white">
                    <h2>POPULAR VIDEOS</h2>
                </div>
                <Suspense  fallback={<Loader/>}>
                <Row className='trending-row p-2 rounded mx-auto ' style={{ background: "linear-gradient(90.33deg, rgba(196, 196, 196, 0) 0.27%, rgba(196, 196, 196, 0.22) 99.71%)" }}>

                    <Card />
                    <Card />
                    <Card />
                    <Card />
               

                </Row>
                </Suspense>
            </Container>
            <Footer/>
        </>
    )
}

export default HomeScreen