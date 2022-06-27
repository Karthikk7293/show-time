import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LANDING_BANNER, LOGO } from '../assets/icons.js'

import Login from '../components/login/Login.jsx'
import { TMDB_API_KEY, TMDB_IMAGE_URL } from '../components/TMDB/TMDB_CONSTANTS.js';

function LoginScreen() {
    const [movie, setMovie] = useState('');
    const navigate = useNavigate()
    const {loading,update,userData,isAuthenticated} = useSelector((state)=>state.user)
    
    useEffect(() => {
       if(isAuthenticated){
        navigate('/login')
       }

        axios.get(`trending/all/day?api_key=${TMDB_API_KEY}`).then((response) => {
            setMovie(response.data.results.sort(() => { return 0.5 - Math.random() })[0])
        })
    }, [userData,navigate,isAuthenticated]);
    return (
<div style={{ backgroundImage: `url(${movie ? TMDB_IMAGE_URL + movie.backdrop_path : LANDING_BANNER})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
        <Container style={{ minHeight: "100vh", background: " rgba(0,0,0,.9) 100%" }} fluid>
            <Row className='m-auto'>
                <Col className='create-channel-logo  my-5 py-5 text-success d-none d-sm-block' style={{ fontStyle: "italic", fontFamily: "sans-serif" }} lg={6}>
                    <h1><img width={"80%"} src={LOGO} alt="SHOW TIME" /></h1>
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
                <Col className='mx-auto' lg={4}>
                    <Login />
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default LoginScreen