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
import { LANDING_BANNER, LOADER_GIF_IMAGE } from '../assets/icons';
import CropImage from '../components/cropper/CropImage';
import { createContent, removeMovie } from '../Redux/User/Actions/contentActions';

function UploadVideos() {


    const [load, setLoad] = useState(false);
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null)
    const [video,setVideo] = useState(null)
    const [showCropper, setShowCropper] = useState(false)
    const [cropImage, setCropImage] = useState(false)
    const [image, setImage] = useState(null)
    const dispatch = useDispatch()

    const { movie, movieDetails } = useSelector((state) => state.movie)
    const { loading,contentCreated } = useSelector((state) => state.content);

    useEffect(() => {
        if (movieDetails) {
            setTitle(movieDetails.title);
            setDescription(movieDetails.overview);
        }
        if(contentCreated){
            alert("successfully uploaded!")
        }
    }, [movieDetails, loading,contentCreated])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && description ) {
            dispatch(createContent({
                 title,
                 description,
                 id:movieDetails.id,
                 title:movieDetails.title,
                 original_title:movieDetails.original_title,
                 overview:movieDetails.overview,
                 poster_path:movieDetails.poster_path,
                 release_date:movieDetails.release_date,
                 backdrop_path:movieDetails.backdrop_path,
                 popularity:movieDetails.popularity,
                 original_language:movieDetails.original_language,
                 video:movieDetails.video,
                 vote_average:movieDetails.vote_average,
                 vote_count:movieDetails.vote_count,
                 adult:movieDetails.adult,
                 image,
                 video,
                }))
            
            // setTitle("")
            // setDescription("")
            // setImage(null)
            // dispatch(removeMovie())  
        } else {
            
            alert("Please fil")
        }
    }

    return (
            <form onSubmit={handleSubmit} >
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
                                        <button className=' rounded py-auto d-flex text-white text-uppercase' type='button' onClick={(() => setLoad(!load))}>
                                           <label htmlFor="upload_video"><span className='my-auto mx-2 mx-auto' for="">upload video</span></label> </button>
                                            
                                            <input className='d-none' type="file" accept='.mp4' id='upload_video' onChange={((e)=>setVideo(e.target.files[0]))} />
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
                        {loading && <div className='text-center'><img width={"60"} src={LOADER_GIF_IMAGE}/></div>}
                    </Col>
                </Row>
            </form>
    )
}

export default UploadVideos