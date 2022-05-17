import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {ExpandMoreIcon} from '@mui/icons-material/ExpandMore';
import {MoreVertIcon} from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';

import VideoCard from '../components/videoCard/VideoCard';
import SuggestionsCard from '../components/suggestionCard/SuggestionsCard';
import AdCard from '../components/adCard/AdCard.jsx';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';



function WatchVideoScreen() {
    return (
        <>
            <Header />
            <Container className='py-5' fluid>
                <Row className='mx-auto my-5 '>
                    <Col className=' mx-auto  p-2' lg={7}>
                        {/* <AdCard/> */}
                        <VideoCard />
                        {/* <AdCard/> */}

                    </Col>
                    <Col lg={4} className="mx-auto ">
                        <div className="upnext px-3 my-3 ">
                            <p className="upnext-title text-white h4">POPULAR REVIEWS</p>
                            <SuggestionsCard />
                            <SuggestionsCard />
                            <SuggestionsCard />
                            <SuggestionsCard />
                            <SuggestionsCard />
                            <SuggestionsCard />
                            <SuggestionsCard />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default WatchVideoScreen