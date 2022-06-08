import React,{useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {ExpandMoreIcon} from '@mui/icons-material/ExpandMore';
import {MoreVertIcon} from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom';

import VideoCard from '../components/videoCard/VideoCard';
import SuggestionsCard from '../components/suggestionCard/SuggestionsCard';
import AdCard from '../components/adCard/AdCard.jsx';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContents } from '../Redux/User/Actions/contentActions';



function WatchVideoScreen() {
    const params = useParams()
    const dispatch = useDispatch()
    const [singleContent,setSingleContent] = useState(null);
    const {contents,loading,error} = useSelector((state)=>state.content)
    
    

    useEffect(() => {
        dispatch(getAllContents())
    }, [dispatch])
   
    useEffect(() => {
        if(contents){
            let [content] =contents.filter((data)=>data._id===params.id)
            setSingleContent(content)
        } 
    }, [params,contents])
    
    
    return (
        <>
            <Header />
            <Container className='py-5' fluid>
                <Row className='mx-auto my-5 '>
                    <Col className=' mx-auto  p-2' lg={7}>
                        {/* <AdCard/> */}
                        <VideoCard content={singleContent} />
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