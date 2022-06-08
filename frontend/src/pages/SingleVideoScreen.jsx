import React, { useState,useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CommentCard from '../components/comments/CommentCard';
import UserDashboardLayout from '../components/layouts/UserDashboardLayout'
import MovieCard from '../components/movieCard/MovieCard'
import AdCard from '../components/adCard/AdCard'
import {getSingleContent} from '../Redux/User/Actions/contentActions'

function SingleVideoScreen() {

    const [content, setContent] = useState({ title: "title", videoFile: "link", adDetails: "another link" });
    const [title, setTitle] = useState(false)
    const [video, setVideo] = useState(false)
    const [ad, setAd] = useState(false)
    const params = useParams();
    const dispatch = useDispatch()
    console.log(params.contentId);

    useEffect(() => {
    dispatch(getSingleContent(params.contentId))
    }, [dispatch])
    

    if (title || video || ad) {
        setTimeout(() => {
            setTitle(false)
            setVideo(false)
            setAd(false)
        }, 20000)
    }

    const handleClick = (value) => {
        if (value === "title") {
            setTitle(!title)
        }
        if (value === "video") {
            setVideo(!video)
        }
        if (value === "advertisement") {
            setAd(!ad)
        }
    }
    const handleSubmit = () => {

    }

    return (
        <UserDashboardLayout>
            <Row>
                <Col lg={4}>
                    <div className="video-content-main pt-3">
                        <MovieCard />
                    </div>
                    <div className="video-content-body my-3   rounded  p-3">
                        <div className="  my-3 px-2 profile rounded d-flex justify-content-between">

                            {!title ? (<> <p className='m-0 my-2 '>{content.title}</p> <span className='my-auto' onClick={(() => handleClick("title"))} ><ion-icon name="create-outline"></ion-icon></span></>) :
                                <input className='m-0 my-2 ' type="text" placeholder={content.title}
                                    value={content.title} onChange={((e) => setContent({ ...content, title: e.target.value }))} autoFocus />}
                        </div>
                        <div className="  my-3 px-2 profile rounded d-flex justify-content-between">

                            {!video ? (<> <p className='m-0 my-2 '>{content.videoFile}</p> <span className='my-auto' onClick={(() => handleClick("video"))} ><ion-icon name="create-outline"></ion-icon></span></>) :
                                <input className='m-0 my-2 ' type="text" placeholder={content.videoFile}
                                    value={content.videoFile} onChange={((e) => setContent({ ...content, videoFile: e.target.value }))} autoFocus />}
                        </div>
                        <div className="  my-3 px-2 profile rounded d-flex justify-content-between">

                            {!ad ? (<> <p className='m-0 my-2 '>{content.adDetails}</p> <span className='my-auto' onClick={(() => handleClick("advertisement"))} ><ion-icon name="create-outline"></ion-icon></span></>) :
                                <input className='m-0 my-2 ' type="text" placeholder={content.adDetails}
                                    value={content.adDetails} onChange={((e) => setContent({ ...content, adDetails: e.target.value }))} autoFocus />}
                        </div>
                        <div className="  my-3 px-2 profile  rounded bg-primary d-flex justify-content-between">
                            <input type="submit" value="SAVE CHANGES " onClick={handleSubmit} className='  rounded w-100 py-2' />

                        </div>
                    </div>

                </Col>
                <Col lg={8} className="video-content-body pt-3">
                    <p className='text-white h4 text-bold px-3'>ADVERTIZEMENTS</p>
                    <Row>
                        <Col lg={6}>
                            <AdCard/>
                        </Col>
                        <Col lg={6}>
                        <AdCard/>
                        </Col>
                        <Col lg={10} className="mx-auto my-3 ">
                            <div className="comments">
                                <h3 className='text-white text-uppercase'>user comments</h3>
                            </div>
                            <CommentCard />
                        </Col>

                    </Row>
                </Col>
            </Row>
        </UserDashboardLayout>
    )
}

export default SingleVideoScreen