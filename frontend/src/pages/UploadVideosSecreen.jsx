import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl } from 'react-bootstrap';

import UserDashboardLayout from '../components/layouts/UserDashboardLayout'
import './pages.css'
import Upload from '../components/videoCard/VideoInput';
import Loader from '../components/icons/Loader';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LANDING_BANNER } from '../assets/icons';
import CropImage from '../components/cropper/CropImage';
import { createContent, removeMovie } from '../Redux/User/Actions/contentActions';

function UploadVideos() {


    const [load, setLoad] = useState(false);
    const [title, setTitle] = useState(null );
    const [description, setDescription] = useState(null)
    const [showCropper, setShowCropper] = useState(false)
    const [cropImage, setCropImage] = useState(false)
    const [image, setImage] = useState(null)
    const dispatch = useDispatch()

    const { movie, movieDetails } = useSelector((state) => state.movie)
    const {loading} = useSelector((state)=>state.content);

    useEffect(() => {
        if (movieDetails) {
            setTitle(movieDetails.title);
            setDescription(movieDetails.overview);
        }
    }, [movieDetails,loading])

const handleSubmit = (e)=>{
    e.preventDefault();
    if(title && description && image){
        dispatch(createContent({title,description,image,movie:movieDetails}))
        alert("successfully uploaded!")
        setTitle("")
        setDescription("")
        setImage(null)
        dispatch(removeMovie())
    }else{
        alert("Please fil")
    }
}

    return (
        <UserDashboardLayout>
                <form onSubmit={handleSubmit}>
            <Row>
               
                <Col lg={7} className="upload-video-main ">
                    <div className="upload-video-title" >
                        <p className='text-uppercase text-white m-3'>upload videos</p>
                    </div>
                    <div className="upload-video-body my-3">
                        <div className="upload-video-title-input my-2 text-center">
                            <input type="text" className=' p-2 rounded mx-auto' value={title} onChange={((e) => setTitle(e.target.value))} placeholder='Please Enter The Title Here..' required />
                        </div>
                        <div className="upload-video-description-input my-2 text-center">
                            <textarea type="text" className=' upload-video-textarea rounded px-2' rows={10} value={description} onChange={((e) => setDescription(e.target.value))} placeholder='Please Enter The Description Here..' required />

                        </div>

                        {/* <Upload/> */}
                        <div className="upload-buttons">
                            <div className="buttons d-flex justify-content-between  mx-5 my-3">
                                <div className="single-button ">
                                    <button className='  rounded text-white text-uppercase'> <Link to={'/content/select-movie'} className="text-white">select movie </Link></button>
                                </div>
                                <div className="single-button  d-flex ">
                                    <button className=' rounded py-auto d-flex text-white text-uppercase' onClick={(() => setLoad(!load))}>
                                        <span className='my-auto mx-2 mx-auto'>upload video</span>{load ? <Loader color /> : ""} </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </Col>
                <Col lg={4} className="upload-video-main  text-center mx-2">
                        <p className='p-0 mt-3 mb-0 text-uppercase text-white'>thumbnail</p>
                        <FormControl
                            className="crop_image d-none"
                            id="upload_thumbnail"
                            type="file"
                            onChange={(e) => {
                                setCropImage(e.target.files[0])
                                setShowCropper(true)
                            }}
                            accept=".jpg,.jpeg,.png,"
                            
                        />
                        <label for="upload_thumbnail" className='my-4 shadow upload-thumbnail '  ><img src={image ? image : LANDING_BANNER} alt="" width={"100%"} height={"150"} /></label>


                    {/* {loading ? <Loader /> : ""} */}
                    {showCropper && (
                        <CropImage
                            cropRatio={{ width: 1600, height: 900 }}
                            src={cropImage}
                            imageCallback={(image) => {
                                setImage(image)
                                setShowCropper(false)
                            }}
                            closeHander={() => {
                                setShowCropper(false)
                            }}
                        />
                    )}
                    <div className="thumnail rounded my-4 shadow">

                    </div>

                    <div className="buttons text-center ">
                        
                        <div className="single-button  my-3">
                            <button type='submit' className=' rounded bg-danger text-center  mx-auto text-white text-uppercase'>upload & publish</button>
                        </div>
                    </div>
                    {loading && <Loader/>}
                </Col>
              </Row>
                </form>
        </UserDashboardLayout>
    )
}

export default UploadVideos