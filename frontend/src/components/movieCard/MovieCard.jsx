import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

function MovieCard({video,count}) {
console.log(count);

    return (
        <Card sx={{ maxWidth: 280 }} className="bg-0 mx-auto"  style={{backgroundColor:"transparent",minHeight:310}} >
            <Link to={`/content/single/${video?._id}`}>
            <CardMedia
                component="img"
                height="194"
                image={ video && video.thumbnail?.url}
                alt={video?.title}
            />
            </Link> 
            <div className="p-2  rounded " >
                <div className="d-flex justify-content-between p-1 ">
                <p className='text-primary text-uppercase' style={{fontSize:"10px"}}>likes : <span className='text-white'></span> </p>
                    <p className="text-muted " style={{fontSize:"10px"}}>September 14, 2016</p>
                </div>
                <h6 className='text-capitalize text-white'>{video?.title}</h6>
                <p className='h6 m-0 p-0 text-white text-truncate' style={{fontSize:"12px",fontWeight:"300"}}>{video?.description}</p>

            </div>
        </Card>
    )
}

export default MovieCard