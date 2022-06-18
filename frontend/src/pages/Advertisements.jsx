import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SnackbarContent from '@mui/material/SnackbarContent';
import { FaTelegramPlane } from 'react-icons/fa';


import UserDashboardLayout from '../components/layouts/UserDashboardLayout'
import ChatCard from '../components/card/ChatCard';
import './pages.css'
import { Avatar } from '@mui/material';
import { USER_AVATAR } from '../assets/icons';

function AdProviders() {

    return (
            <Row>
                <Col className='advertisement-main-screen  rounded-0 py-2' lg={4}>
                    <div className='advertisement-main-screen-sub px-2' >
                        <div className="advertisements-title my-3 text-center">
                            <p className='text-white  h5'>Advertisements Providers</p>
                        </div>
                        <hr className='bg-white' />
                        <div className="advertisements-body py-1 " >

                            <div>
                                <ChatCard />
                                <hr className='bg-info m-0' />
                            </div>
                            <div>
                                <ChatCard />
                                <hr className='bg-info  m-0' />
                            </div>
                            <div>
                                <ChatCard />
                                <hr className='bg-info p-0 m-0' />
                            </div>
                            <div>
                                <ChatCard />
                                <hr className='bg-info p-0 m-0' />
                            </div>
                            <div>
                                <ChatCard />
                                <hr className='bg-info p-0 m-0' />
                            </div>
                            <div>
                                <ChatCard />
                                <hr className='bg-info p-0 m-0' />
                            </div>
                            <div>
                                <ChatCard />
                                <hr className='bg-info p-0 m-0' />
                            </div>
                            <div>
                                <ChatCard />
                                <hr className='bg-info m-0' />
                            </div>
                            <div>
                                <ChatCard />
                                <hr className='bg-info  m-0' />
                            </div>
                            <div>
                                <ChatCard />
                                <hr className='bg-info p-0 m-0' />
                            </div>
                            <div>
                                <ChatCard />
                                <hr className='bg-info p-0 m-0' />
                            </div>
                            <div>
                                <ChatCard />
                                <hr className='bg-info p-0 m-0' />
                            </div>
                            <div>
                                <ChatCard />
                                <hr className='bg-info p-0 m-0' />
                            </div>
                            <div>
                                <ChatCard />
                                <hr className='bg-info p-0 m-0' />
                            </div>

                        </div>
                    </div>
                </Col>
                <Col className='advertisement-main-screen rounded-0 m-0 py-1' lg={6}>

                    <div className="advertisement-chat-title d-flex  px-2 py-2  ">
                        <Avatar alt="user" className='p-0 m-0' src={USER_AVATAR} />
                        <p className="text-white my-auto mx-3 h5 m-0 text-capitalize">name</p>
                    </div>
                    <hr className='bg-white my-1' />
                    <div className="chat-room-container rounded py-3 px-2">
                        <div className="my-2 ps-5 ms-4">
                            <SnackbarContent message="I love snacks." /> <p className='m-0 py-0 text-end text-muted  pe-2'>09:15pm</p>
                        </div>
                        <div className="my-2 pe-5 me-4">
                            <SnackbarContent message="I love snacks." /> <p className='m-0 py-0 text-end text-muted  pe-2'>09:15pm</p>
                        </div>
                        <div className="my-2 ps-5 ms-4">
                            <SnackbarContent message="I love snacks." /> <p className='m-0 py-0 text-end text-muted  pe-2'>09:15pm</p>
                        </div>
                        <div className="my-2 pe-5 me-4">
                            <SnackbarContent message="I love snacks." /> <p className='m-0 py-0 text-end text-muted pe-2'>09:15pm</p>
                        </div>
                        <div className="my-2 ps-5 ms-4">
                            <SnackbarContent message="I love snacks." /> <p className='m-0 py-0 text-end text-muted pe-2'>09:15pm</p>
                        </div>

                    </div>
                    <div className="chat-sent-bar  rounded  d-flex justify-content-between px-2 my-1 ">
                        <div className='chat-message-input my-auto '>
                            <input type="text" className=' py-3  text-white w-100'  placeholder="type something...."/>
                        </div>
                        <div className="sent-icon my-auto">
                        <FaTelegramPlane size={40}/>
                        </div>
                    </div>
                </Col>
            </Row>
    )
}

export default AdProviders