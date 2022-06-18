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
import { getAllContents, getPopularContents, getSuggestedContents } from '../Redux/User/Actions/contentActions';
import { CLEAR_USER_ERRORS } from '../Redux/User/Constants/userConstants';
import notfount from '../assets/notfount.gif'
import {LOADER_GIF_IMAGE} from '../assets/icons'


function WatchVideoScreen() {
    const params = useParams()
    const dispatch = useDispatch()
    const [singleContent,setSingleContent] = useState(null);

    const {contents} = useSelector((state)=>state.content)

    const {suggestedContents,popularContents,loading,count,error} = useSelector((state)=>state.popularContents)

    




    useEffect(() => {
        dispatch(getAllContents())
        dispatch(getSuggestedContents())
    }, [dispatch])
   
    useEffect(() => {
        if(contents){
            let [content] =contents.filter((data)=>data._id===params.id)
            setSingleContent(content)
        dispatch(getPopularContents(content?.movie.id,content?._id))
        } 
        
    }, [params,contents,dispatch])
    
    
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
                    <Col lg={4} className="mx-auto border">
                        <div className="upnext px-3 my-3 ">
                            <p className="upnext-title text-white h4">POPULAR REVIEWS</p>
                            {loading && <div className='text-center'><img width={"60"} src={LOADER_GIF_IMAGE}/></div> }
                            {count && count !== 0 ? <div>
                                {popularContents.map((data)=>(
                                    <SuggestionsCard suggestions={data} />
                                ))}
                            </div> : <div className='text-center'><img width={"120"}  src={notfount}/></div> }
                            
                            
                        </div>
                        <div className="upnext px-3 my-3 ">
                            <p className="upnext-title text-white h4">SUGGESTED REVIEWS</p>
                            {loading ? <div className='text-center'><img width={"60"} src={LOADER_GIF_IMAGE}/></div>  : <div>
                                {suggestedContents && suggestedContents.map((item)=>(
                                    <div key={item._id}>
                                        <SuggestionsCard  suggestions={item} />
                                    </div>
                                ))}
                            </div> }
                            
                           
                        </div>
                    </Col>
                    
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default WatchVideoScreen