import React from 'react'
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { USER_AVATAR } from '../../assets/icons';


function ChatCard() {
    return (
        <div className="chat-message-card  d-flex justify-content-between px-3 py-1" >
            <p className='my-auto   d-flex text-white'><Avatar alt="user" src={USER_AVATAR} /><span className='my-auto px-2' >name</span></p>
            <p className='my-auto text-end'><Badge badgeContent={4} color="success" /></p>
        </div>
    )
}

export default ChatCard