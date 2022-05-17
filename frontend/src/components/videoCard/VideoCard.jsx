import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import CommentCard from '../comments/CommentCard'
import './videoCard.css'

function VideoCard() {
    return (
        <div>
            <div className="video-content">
                <video width="100%" height="450" controls >
                    <source src="https://www.youtube.com/embed/668nUCeBHyY" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="video-body px-2">
            <div className="icons ms-2 text-end d-flex justify-content-between  ">
                <div className="d-flex">
                <p className='mx-2'><span><ion-icon name="eye-sharp"></ion-icon></span>1234</p>
                <p className='mx-2'><span><ion-icon name="heart-outline"></ion-icon></span>1234</p>
                </div>
                <p className='mx-2' > <span><ion-icon name="bookmarks-outline"></ion-icon></span></p>
                   
                    </div>
                <div className="video-title d-flex justify-content-between ">
                    <p className="">video title</p>
                    <div className="subscibe-btns">
                        <input type="submit" value='SUBSCRIBE' className='border-0 px-3 py-2 shadow'  />
                        {/* <input type="submit"  value='SUBSCRIBED'/> */}
                    </div>
                </div>
                <hr />
                <div className="video-descriptions mx-2">
                    <p className="h5">video descriptions Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed iure dolorum voluptates. Ex ducimus fuga placeat sed cum id consequuntur laborum, accusantium beatae provident libero, odio iste asperiores fugit?</p>
                    
                </div>
                <hr />
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
                <CommentCard/>
                </Row>
                </Container>
                
            </div>

        </div>
    )
}

export default VideoCard