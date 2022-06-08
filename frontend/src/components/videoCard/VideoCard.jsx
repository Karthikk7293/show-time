import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import BookRoundedIcon from '@mui/icons-material/BookRounded';

import CommentCard from '../comments/CommentCard'
import './videoCard.css'
import { useDispatch, useSelector } from 'react-redux';
import { likeAndDislikeContents } from '../../Redux/User/Actions/contentActions';
import { LIKE_CONTENT_RESET } from '../../Redux/User/Constants/contentContansts';

function VideoCard({ content }) {
    const [like, setLike] = useState(false);
    const dispatch = useDispatch();
    const { like: likes, isUpdate,content:video } = useSelector((state) => state.content)
    const {userDetails} = useSelector((state)=>state.user)

    useEffect(() => {
        // if(content?.likes.includes(userDetails._id)){
        //     // setLike(!like)
        // }
        if (isUpdate) {
            dispatch({ type: LIKE_CONTENT_RESET })
        }

    }, [isUpdate, dispatch,like,content])


    const likeHandler = (e) => {
        e.preventDefault()
        setLike(!like)
        dispatch(likeAndDislikeContents(content._id))
    }
    return (
        <div>
            <div className="video-content">
                <video width="100%" height="450" poster={content && content.thumbnail.url} controls  >
                    <source src="https://res.cloudinary.com/dz1mjj7pf/video/upload/v1654519748/thumbnails/WhatsApp_Video_2021-12-28_at_10.55.00_AM_hch8kw.mp4" />
                    Your browser does not support the video tag.

                </video>
            </div>
            <div className="video-body ">
                <div className="icons ms-2 text-end d-flex justify-content-between">
                    <div className="d-flex">
                        <div className='d-flex '> <i className='text-primary text-uppercase'>views :</i><p className="mx-1">{content && content.likes.length}</p></div>
                        <div className='d-flex mx-2'> <i className='text-primary text-uppercase'>likes :</i><p className="mx-1">{content && content.likes.length}</p></div>
                    </div>
                    <div className='' >  <i className={like ? "like-button" : ""} onClick={likeHandler}><FavoriteRoundedIcon /></i> <i><BookRoundedIcon /></i></div>

                </div>
                <div className="video-title d-flex justify-content-between ">
                    <p className="text-white">{content && content.title}</p>

                </div>
                <hr />
                <div className="video-title d-flex justify-content-between ">
                    <div className="channel-avatar d-flex mx-1">
                        <Avatar />
                        <h4 className='my-auto mx-1 text-white'>channel name</h4>
                    </div>
                    <div className="subscibe-btns">
                        <input type="submit" value='SUBSCRIBE' className='border-0 px-3 py-2 shadow' />
                        {/* <input type="submit"  value='SUBSCRIBED'/> */}
                    </div>
                </div>
                <hr />
                <pre className="text-white text-wrap mx-3">{content && content.description} </pre>
                <div className="video-descriptions mx-2">show more
                    <p className='text-white '>Release date : {content && content.movie.release_date}</p>
                    <p>Popularity : {content && content.movie.popularity}</p>
                </div>
                <hr />
                <Container>

                </Container>
            </div>

            <div className="comments px-2">
                <Container fluid>
                    <Row className=''>
                        <Col className='my-2' lg={11}>
                            <div className="user-comment">
                                <form action="" className='d-flex justify-content-between'>
                                    <input type="text" placeholder='please enter your comments...' className='w-100 mx-2 py-1 px-2' />
                                    <input type="submit" value="add comment" className='px-3 border-0 ' />
                                </form>
                            </div>
                        </Col>
                        <CommentCard />
                    </Row>
                </Container>

            </div>

        </div>
    )
}

export default VideoCard