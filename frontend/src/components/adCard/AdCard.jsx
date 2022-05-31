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
        image="https://rukminim1.flixcart.com/image/416/416/jcc9ci80/poster/n/a/e/medium-pl-wthe-conjuring-movie-wide-wall-poster-19-13-inches-original-imaetdv7zpzfhddg.jpeg?q=70"
        alt="Paella dish"
    />
    </Link>
    <div className="p-2  rounded " >
        <div className=" p-1 ">
            <h5 className='text-capitalize text-white'>Advertisement Provider</h5>
            <div className="ad-provided_dates d-flex justify-content-between">
            <p className="text-muted m-0 p-0">Start Date : September 14,2016</p>
            <p className="text-muted m-0 p-0">End Date : September 14,2016</p>
            </div>
        </div>
        <p className='h6 m-0 p-0 text-white'>payment Dtails</p>
        {/* <CardActions className='d-flex text-white justify-content-between'>
            <FavoriteIcon />
            
        </CardActions> */}
        
    </div>

</Card>
  )
}

export default AdCard