import React, {useEffect,useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Loader from '../components/icons/Loader.jsx'
import { getAllContents } from '../Redux/User/Actions/contentActions.js'

import Banner from '../components/banner/Banner.jsx'
import Header from '../components/header/Header.jsx'
import Footer from '../components/footer/Footer.jsx'
import Card from '../components/card/Card.jsx'

function HomeScreen() {

    const dispatch = useDispatch()

    const {contents,loading,error} = useSelector((state)=>state.content)
    
   
    useEffect(() => {
        dispatch(getAllContents())
    }, [dispatch])
    
    
    return (
        <>
           <Header/>
            <Container className='py-5 ' fluid>
                <Row >
                    <Banner  />
                </Row>
            </Container>
            <Container className='' fluid>
                <div className="trending-card-title py-3 text-white text-center">
                    <h2>TRENDING VIDEOS</h2>
                </div>
               
                <Row className='trending-row  rounded   mx-3 ' style={{ background: "linear-gradient( rgba(196, 196, 196, 0.22) 0.27%, rgba(196, 196, 196, 0) 99.71%)" }}>
                    {contents ? contents.map((content,index)=>(
                    <Card key={index} content={content} />

                    )) : <Loader/>}
                </Row>
               
            </Container>
            <Container className='px-5 ' fluid>
                <div className="trending-card-title py-3 text-white">
                    <h2>POPULAR VIDEOS</h2>
                </div>
                
                <Row className='trending-row p-2 rounded mx-3 ' style={{ background: "linear-gradient( rgba(196, 196, 196, 0) 0.27%, rgba(196, 196, 196, 0.22) 99.71%)" }}>

                   

                </Row>
               
            </Container>
            <Footer/>
        </>
    )
}

export default HomeScreen