import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'

import './card.css'
import { CONTENT_POSETER } from '../../assets/icons'
import { TMDB_IMAGE_URL } from '../TMDB/TMDB_CONSTANTS'

function Card({content}) {
    return (
        <Col  lg={3}>
            <div className="trending-card bg-light  m-2 px-2 text-center rounded shadow">
                <p className='py-2 m-0'>{content && content.title}</p>
                <Link to={`/watch/video/${content && content._id}`}>
                <img width={"80%"} height={260} src={content ? TMDB_IMAGE_URL+content.movie.poster_path : CONTENT_POSETER} alt="" />
                </Link>
                <div className="trending-card-body">
                    <div className="card-title text-uppercase mb-0 ">
                        <p className='mb-0'> </p>
                    </div>
                    <div className="rating-star my-1 d-flex justify-content-center  m-0">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                    </div>
                    <div className="trending-discription my-2">
                        <p className="text-truncate text-primary">{content && content.description } </p>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default Card;    