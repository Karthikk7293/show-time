import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import './comments.css'
import Avatar from '../../components/icons/Avatar'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function CommentCard() {
    const [expanded, setExpanded] = useState(false);
    const [hide, setHide] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded);
        setHide(!hide);
    };
    return (


        <Col className='mx-auto my-1' lg={11}>
            <div className='text-center text-white m-0 p-0'>
                <div className="">
                   
                    {hide ? <p className='p-0 m-0'>show less</p> : <p className='p-0 m-0'>show more</p>}
                <ExpandMore
                
                    className="text-white show-more-button "
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more" >
                    <ExpandMoreIcon />
                </ExpandMore>
                    
              
                </div>
               
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <div className="comment d-flex justify-content-between m-0 p-0">
                        <div className="user-img">
                               <Avatar image ={"https://cdn.imgbin.com/6/25/24/imgbin-user-profile-computer-icons-user-interface-mystique-aBhn3R8cmqmP4ECky4DA3V88y.jpg"}/>
                        </div>
                        <div className="comment-content ms-2 overflow-hidden text-start">
                            <p className='m-0'>name</p>
                            <p className='text-truncate'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, ratione ducimus, magni aut nisi, provident sint veritatis fuga consectetur nobis illo quae? Porro sed asperiores excepturi rerum libero sapiente distinctio.</p>
                        </div>
                    </div>

                </Collapse>

            </div>

        </Col>


    )
}

export default CommentCard