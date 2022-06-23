import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';

import './header.css'
import './header.js'
import SearchBar from '../search/SearchBar';
import ProfilePic from '../avatar/ProfilePic';
import Notification from '../avatar/Notification';
import { LOGO } from '../../assets/icons';
import { useSelector } from 'react-redux';

const pages = ['home', 'live', 'saved videos'];


function Header() {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const { loader } = useSelector((state) => state.loadingComponent)

    
    // console.log(loader,"========================");

    useEffect(() => {
        let userData = localStorage.getItem("userData")
        if (userData) {
            userData = JSON.parse(userData)
            setUser(userData)
        }

    }, [])


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleClick = (value) => {
        if (value === "Profile") {
            navigate('/user/profile')
        }
    }

    return (
        <div className="main-header position-fixed">
            <AppBar position="fixed" className='bg-dark' >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>

                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={(() => handleClick(page))}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>

                        </Box>
                        <Link to={'/'}>
                            <p className='header-logo my-auto'><img width={'100'} src={LOGO} alt="" /></p>
                        </Link>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}

                        </Box>
                        <SearchBar />
                        {user ? (<> <Notification /><ProfilePic /></>) : (<>
                            <Link className='text-uppercase mx-2 text-danger login-link ' to={'/login'}>Login</Link>
                            <Link className='text-uppercase mx-2 text-danger login-link ' to={'/signup'}>sign up</Link>
                        </>)}
                    </Toolbar>
                </Container>
                {/* {!loader && <LinearProgress />} */}
                <div class="progress"></div>
            </AppBar>

        </div>
    )
}

export default Header