import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import './layout.css'
import Header from '../header/Header'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'
import { CHANNER_BANNER, USER_AVATAR } from '../../assets/icons'
import Sidebar from '../sidebar/Sidebar'

function UserDashboardLayout({ children }) {
    const [edit, setEdit] = useState(false);
    const [user, setUser] = useState(null)
    const [channel, setChannel] = useState({ banner: "", avatar: "", channel_name: "" })

    useEffect(() => {
        let userData = localStorage.getItem("userData")
        if (userData) {
            userData = JSON.parse(userData)
            setUser(userData)
            if(userData.channel && userData.banner){
                setChannel({...channel,banner:userData.banner.url,channel_name:userData.channel})
            }
        }


    }, [])

    const handleClick = (value) => {
        if (value === "name") {
            setEdit(!edit)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div>
            <Header />
            <Container className='common-dashboard-container  ' >

                <Row className='mt-5'>
                    <Col lg={12}>

                        <div className="user-dashboard-banner mt-3  pt-5 d-xs-none d-sm-none d-lg-block ">
                           {user ? <img className='banner-image position-absolute rounded-3 ' src={user.banner ? user.banner.url : CHANNER_BANNER}  alt="" /> : <img className='banner-image position-absolute rounded-3 ' src={CHANNER_BANNER}  alt="" /> } 
                           {user ? <img className='profile-image position-relative' src={user.avatar ? user.avatar.url : USER_AVATAR} alt="" /> : <img className='profile-image position-relative ' src={ USER_AVATAR} alt="" /> } 
                        </div>

                    </Col>
                    <div className="col-12 d-lg-none d-col-block d-md-none d-sm-none ">
                        <div className=" mt-3  pt-5  text-center">
                            <img className='banner-image' width={"100%"} height={"200"} src={CHANNER_BANNER} alt="" />
                            <img className='profile-image  ' width={"100"} src={ USER_AVATAR} alt="" />
                        </div>
                    </div>
                    <Col lg={9} className=" d-flex justify-content-between my-4  ms-auto">
                        <div className="Channel-title text-white text-capitalize">

                            {edit ?
                                <form className="input-tag" onSubmit={handleSubmit}>
                                    <input type="text" className=' text-capitalize h3 ' placeholder={user.channel} value={user.channel} onChange={((e) => setChannel({ ...channel, channel_name: e.target.value }))} autoFocus />
                                    <input type="submit" className='my-auto border rounded px-2' value='save' />
                                </form>
                                :
                                <div className='input-tag d-flex mt-4'>
                                    <h3>{user && user.channel}</h3>
                                    <span className='my-auto mx-5 ' onClick={(() => handleClick("name"))}><ion-icon name="create-outline"></ion-icon></span>
                                </div>}
                                <p className='text-muted mx-2'>{user?.name}</p>
                        </div>
                        <div className="navigate-to-dashboard text-uppercase mt-5   me-5">
                            <Link to={'/content/upload/video'} className="navigate-to-dashboard-link  px-4 py-2 ">

                                <span> upload videos</span><i></i>
                            </Link>
                        </div>
                    </Col>
                </Row>

            </Container>
            <Container fluid className='px-5'>
                <Row>
                    <Col lg={3} className="" >
                        <Sidebar admin />
                    </Col>
                    <Col lg={9}>
                        {children}
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default UserDashboardLayout