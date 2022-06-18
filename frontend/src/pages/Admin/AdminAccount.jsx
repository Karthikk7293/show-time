import React, { useEffect, useState } from 'react'
import { Col, Container, FormControl, Row } from 'react-bootstrap'
import { LANDING_BANNER, LOGO } from '../../assets/icons'
import CropImage from '../../components/cropper/CropImage'
import { TMDB_API_KEY, TMDB_IMAGE_URL } from '../../components/TMDB/TMDB_CONSTANTS'
import Tooltip from '@mui/material/Tooltip';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AdminAccount() {
    const [showCropper, setShowCropper] = useState(false)
    const [cropImage, setCropImage] = useState(false)
    const [image, setImage] = useState(null)
    const [movie, setMovie] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        
        axios.get(`trending/all/day?api_key=${TMDB_API_KEY}`).then((response) => {
            setMovie(response.data.results.sort(() => { return 0.5 - Math.random() })[0])
        })
    }, []);
console.log(movie);
    const handleSubmit = (e)=>{
        e.preventDefault()
    }

  return (
    <div style={{ backgroundImage: `url(${movie ? TMDB_IMAGE_URL + movie.backdrop_path : LANDING_BANNER})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} >
            <Container style={{ minHeight: "100vh", background: " rgba(0,0,0,.9) 100%" }} fluid>
                <Row>
                    <Col className='create-channel-logo mx-auto my-5 py-5 text-success' style={{ fontStyle: "italic", fontFamily: "sans-serif" }} lg={4}>

                        <h1><img width={500} src={LOGO} alt="SHOW TIME" /></h1>
                        <div>
                            <p >
                                This website is intended for viewing solely in the United States and its territories and possessions.
                                <br />

                                <br />
                                <span style={{ fontSize: "10px", fontStyle: "oblique" }}> Privacy Policy | Terms of Use | Closed Captioning Do Not Sell My Personal Information | Cookies Policy</span>
                                <br />
                                <br />
                                <span className='' style={{ fontSize: "13px" }}> © 2022 Showtime Networks Inc. and Showtime Digital Inc. <br /> SHOWTIME is a registered trademark of Showtime Networks Inc. <br />  <br /> a Paramount Global Company. All rights reserved.</span>
                            </p>
                        </div>

                    </Col>
                    <Col className='mx-auto  text-success text-uppercase text-center my-1 p-3' lg={6}>
                        <form onSubmit={handleSubmit}>
                            <Row className=' shadow  '>
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
                        <Tooltip title="Add Banner For Your Channel">
                        <label htmlFor="upload_thumbnail" className='  upload-thumbnail px-auto ' style={{height:"13rem"}}  >
                            <img className='my-5 rounded p-0 m-0' src={image ? image : LANDING_BANNER} alt="" width={"85%"}  />
                            </label>
                        </Tooltip>
                        {/* {loading ? <Loader /> : ""} */}
                        {showCropper && (
                            <CropImage
                                cropRatio={{ width: 1600, height: 300 }}
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
                            </Row>
                            {/* <Row className=' shadow mx-5 my-2 text-start' >
                                <label  htmlFor="">channel Name</label>
                                <input type="text"  className=' border-0 p-2 my-2 text-white' onChange={((e)=>setDetails({...details,channel:e.target.value}))} style={{background:"rgb(255 255 255 / 10%)",outline:"none"}} required/>
                            </Row> */}
                            {/* <Row className=' shadow mx-5 my-2 text-start'>
                                <label htmlFor="">about channel</label>
                                <textarea name="" id=""  rows="6" onChange={((e)=>setDetails({...details,about:e.target.value}))} className=' my-2 border-0 p-2 text-white' style={{background:"rgb(255 255 255 / 10%)",outline:"none"}} required></textarea>
                            </Row> */}
                            <div className='text-end mx-5'>
                                <input style={{background:"rgb(255 255 255 / 10%)",outline:"none"}} className='px-5 py-2 border-0 text-success ' type="submit" value={"SAVE"} />
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
  )
}

export default AdminAccount