import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'

import './card.css'

function Card() {
    return (
        <Col lg={3}>
            <div className="trending-card bg-light  m-2 px-2 text-center rounded shadow">
                <p className='py-2'>MOVIE CATOGORY</p>
                <Link to={"/watch/video"}>
                <img width={165} height={230} src="https://marketplace.canva.com/EAE4sZqehD4/1/0/1131w/canva-gray-%26-black-monochrome-blind-forest-movie-present-poster-PRZ-uOOwgf0.jpg" alt="" />
                </Link>
                <div className="trending-card-body">
                    <div className="card-title text-uppercase mb-0 ">
                        <p className='mb-0'>title</p>
                    </div>
                    <div className="rating-star d-flex justify-content-center text-danger m-0">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                    </div>
                    <div className="trending-discription my-2">
                        <p className="text-truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default Card;    