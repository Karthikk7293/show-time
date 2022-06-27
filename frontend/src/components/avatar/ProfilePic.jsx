import React, {useState} from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import {useDispatch, useSelector} from 'react-redux'
import { logoutUser } from '../../Redux/User/Actions/userActions';
import { USER_AVATAR } from '../../assets/icons';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function ProfilePic() {


    const [anchorElUser, setAnchorElUser] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const {userData } = useSelector((state)=>state.user)



    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleClick = (value) => {
        if (value === "Profile") {
            navigate('/user/profile');
        }else if(value === "Dashboard"){
            navigate("/user/dashboard");
        }else if(value === "Logout"){
            dispatch(logoutUser())
            navigate("/login")
        }
    }

  return (
    <Box sx={{ flexGrow: 0 ,px:2 }}>
    <Tooltip title="Open settings">
        <IconButton className='text-uppercase' onClick={handleOpenUserMenu} sx={{ p: 0 }}>
           {userData &&  <Avatar alt={userData && userData.name} src={userData.avatar ? userData.avatar.url : USER_AVATAR} /> }  
        </IconButton>
    </Tooltip>
    <Menu
        sx={{ mt: '3.5rem'  }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
    >
        {settings.map((setting) => (
            <MenuItem key={setting} onClick={((e) => handleClick(setting))}>
                <Typography textAlign="center" >{setting}</Typography>
            </MenuItem>
        ))}
    </Menu>
</Box>
  )
}

export default ProfilePic;