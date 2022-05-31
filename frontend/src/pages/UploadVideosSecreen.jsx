import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import UserDashboardLayout from '../components/layouts/UserDashboardLayout'
import './pages.css'
import Upload from '../components/videoCard/VideoInput';
import Loader from '../components/icons/Loader';
import { Link } from 'react-router-dom';

function UploadVideos() {

    const [load, setLoad] = useState(false);

   
    return (
        <UserDashboardLayout>
            <Row>
                <Col lg={7} className="upload-video-main ">
                    <div className="upload-video-title" >
                        <p className='text-uppercase text-white m-3'>upload videos</p>

                    </div>
                    <div className="upload-video-body my-3">
                        <div className="upload-video-title-input my-2 text-center">
                            <input type="text" className=' p-2 rounded mx-auto' placeholder='Please Enter The Title Here..' />
                        </div>
                        <div className="upload-video-description-input my-2 text-center">
                            <textarea type="text" className='rounded px-2' rows={5} maxLength={20} placeholder='Please Enter The Description Here..' />

                        </div>
                        {/* <Upload/> */}
                        <div className="upload-buttons">
                            <div className="buttons d-flex justify-content-around  my-3">
                            <div className="single-button ">
                                    <button className='  rounded text-white text-uppercase'> <Link to={'/content/select-movie'} className="text-white">select movie </Link></button>
                                </div>
                                <div className="single-button  d-flex ">
                                 <button className=' rounded py-auto d-flex text-white text-uppercase' onClick={(()=>setLoad(!load))}>
                                     <span className='my-auto mx-2 mx-auto'>upload video</span>{load ? <Loader color /> : ""} </button>
                                </div>
                            </div>
                            <div className="buttons d-flex justify-content-around  my-3">
                                <div className="single-button ">
                                    <button className='  rounded bg-primary text-white text-uppercase'>upload</button>
                                </div>
                                <div className="single-button">
                                    <button className=' rounded bg-danger text-white text-uppercase'>upload & publish</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </UserDashboardLayout>
    )
}

export default UploadVideos