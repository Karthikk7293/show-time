import React, { useEffect, useState, } from 'react'
import { Navbar, Nav, Container, Form, Button, FormControl,NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

import Avatar from '../../components/icons/Avatar'

import './header.css'

function Header() {

    const [name,setName] = useState("");
    const navigate = useNavigate();
    console.log(name);
    useEffect(() => {

        let userData = localStorage.getItem("userData")
        if(userData){
            userData = JSON.parse(userData);
            setName(userData.name)
        }else{
            navigate('/login')
        }
      
    }, [navigate])

   console.log(name);
    
    return (
        <Navbar bg="dark" expand="lg" className='shadow' style={{position:"fixed" , width:"100%",zIndex:"99"}} >
            <Container className='d-flex'  fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
            <Link to={"/"} className="text-decoration-none text-light"><Navbar.Brand className='text-light h1' >  HD-POPCORN</Navbar.Brand></Link>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="nav-elements mx-auto my-2 my-lg-0 "
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className='text-light mx-1'>HOME</Nav.Link>
                        <Nav.Link className='text-light mx-1'>MOVIES</Nav.Link>
                        <Nav.Link className='text-light'>LIVE</Nav.Link>
                        <Nav.Link className='text-light'><Link to={'/user/profile'}>SAVED VIDEOS</Link></Nav.Link>
                        {/*  
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>*/}
                    </Nav>
                    <Form className="d-flex me-auto">
                        <FormControl
                            type="search"
                            placeholder="Search....."
                            className="mx-1"
                            aria-label="Search"
                        />
                        <Button variant="light"><ion-icon name="search"></ion-icon></Button>
                    </Form>
                </Navbar.Collapse>
                <div className='d-flex'>
                <NavDropdown className='notification-container'   title={<span className='notifications  text-white'><ion-icon  name="notifications"></ion-icon> <div className="notify"></div></span>} >
                            <NavDropdown.Item className="text-truncate py-2 m-2 rounded" >Action <span>small conntent</span></NavDropdown.Item>
                            <NavDropdown.Item className="text-truncate py-2 m-2 rounded" >Another<span>small conntent</span> </NavDropdown.Item>
                            <NavDropdown.Item className="text-truncate py-2 m-2 rounded" >Another <span>small conntent</span> </NavDropdown.Item>
                        </NavDropdown>
                        {name ? <Nav.Link className='text-light mx-1 login text-uppercase'> {name}</Nav.Link> :
                         <Nav.Link className='text-light login'><Link className=" text-info " to={'/login'} > LOGIN</Link></Nav.Link>
                         }
                         {name ? "" :
                         <Nav.Link className='text-light signup'><Link className="mx-1 text-info" to={'/signup'} > SIGN UP</Link></Nav.Link>
                         }
                
                <Nav.Link className='text-light  signup' style={{marginTop: "-2rem",marginBottom: "-2rem"}}><Link className="mx-1 text-info" to={'/user/profile'} > <Avatar/></Link></Nav.Link>

                        
                </div>
            </Container>
        </Navbar>
    )
}

export default Header