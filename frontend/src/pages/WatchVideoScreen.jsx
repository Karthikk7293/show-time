import React,{useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import VideoCard from '../components/videoCard/VideoCard';
import SuggestionsCard from '../components/suggestionCard/SuggestionsCard';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { getAllContents, getPopularContents, getSuggestedContents } from '../Redux/User/Actions/contentActions';
import notfount from '../assets/notfount.gif'
import {LOADER_GIF_IMAGE} from '../assets/icons'
import { CLEAR_USER_ERRORS } from '../Redux/User/Constants/userConstants';


function WatchVideoScreen() {
    const params = useParams()
    const dispatch = useDispatch()
    const [singleContent,setSingleContent] = useState(null);

    const {contents} = useSelector((state)=>state.content)

    const {suggestedContents,popularContents,loading,count,error} = useSelector((state)=>state.popularContents)

    useEffect(() => {
        dispatch(getAllContents())
        dispatch(getSuggestedContents())
        if(error){
            dispatch({type:CLEAR_USER_ERRORS})
        }
    }, [dispatch,error])
   
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
                        <VideoCard content={singleContent} />

                    </Col>
                    <Col lg={4} className="mx-auto border">
                        <div className="upnext px-3 my-3 ">
                            <p className="upnext-title text-white h4">POPULAR REVIEWS</p>
                            {loading && <div className='text-center'><img width={"60"} src={LOADER_GIF_IMAGE} alt=""/></div> }
                            {count && count !== 0 ? <div>
                                {popularContents.map((data)=>(
                                    <SuggestionsCard suggestions={data} />
                                ))}
                            </div> : <div className='text-center'><img width={"120"}  src={notfount} alt=""/></div> }
                            
                            
                        </div>
                        <div className="upnext px-3 my-3 ">
                            <p className="upnext-title text-white h4">SUGGESTED REVIEWS</p>
                            {loading ? <div className='text-center'><img width={"60"} src={LOADER_GIF_IMAGE} alt=""/></div>  : <div>
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