import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

import { LANDING_BANNER } from '../../assets/icons'


function AdCard() {
  return (
    <Card sx={{ maxWidth: 280 }} className="bg-0 mx-auto"  style={{backgroundColor:"transparent"}} >
    <Link to={'/content/single'}>
    <CardMedia
        component="img"
        height="194"
        image="http://farname.ir/upload/posts/1397-06/best_Advertisement_farname.jpg"
        alt="Paella dish"
    />
    </Link>
    <div className="p-2  rounded " >
        <div className="d-flex justify-content-between p-1 ">
            <h5 className='text-capitalize text-white'>sdfg</h5>
            <p className="text-muted h6  ">September 14, 2016</p>
        </div>
        <p className='h6 m-0 p-0 text-white'>description</p>
        <CardActions className='d-flex text-white justify-content-between'>
            <FavoriteIcon />
            
        </CardActions>
        
    </div>

</Card>
  )
}

export default AdCard