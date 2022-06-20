import React, { useEffect, useState } from 'react'
import { Rating } from "@material-ui/lab";

import axios from '../TMDB/Axios';
import { TMDB_API_KEY, TMDB_IMAGE_URL } from '../TMDB/TMDB_CONSTANTS';

import './banner.css'
import { LANDING_BANNER } from '../../assets/icons';
import { Container, Row } from 'react-bootstrap';

function Banner() {

    const [movie, setMovie] = useState('');

    const options = {
        value: movie.vote_average,
        readOnly: true,
        precision: 0.5,
    };

    useEffect(() => {

        axios.get(`trending/all/day?api_key=${TMDB_API_KEY}`).then((response) => {
            setMovie(response.data.results.sort(() => { return 0.5 - Math.random() })[0])
        })
    }, []);

    return (
        <div style={{ backgroundImage: `url(${movie ? TMDB_IMAGE_URL + movie.backdrop_path : LANDING_BANNER})` }}
            // background:url(http://image.tmdb.org/t/p/w500/wrhLyiY7ksW0fQCqNpa52qiOAH8.jpg)
            className="conatainer-fluid banner m-0 p-0" >
            <div className="banner-row ">


                <Container className='py-5'>

                    <Row className="  py-5 ">

                        <div className="col-lg-8  py-5">

                            <div className="title text-light">

                                <h1 className='text-uppercase '>{movie && movie ? movie.original_title : movie.original_name ? movie.name : ""} </h1>
                                {movie.vote_average && <Rating {...options} />}
                            </div>

                            <div className="description text-light mt-4">
                                <h3> Start Streming On {movie ? movie.first_air_date : movie.release_date}</h3>
                                <p>
                                    {movie ? movie.overview : ""}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 mx-auto text-end">
                            <img width={'100%'} height={"400"} src={movie ? TMDB_IMAGE_URL + movie.poster_path : ""} alt={movie ? movie.name : movie.original_name} />

                        </div>
                        {/* <div className="col-lg-4 d-flex justify-content-end">
                    <div className="poster-card rounded shadow col-d-none d-lg-block">
                        <img width={'100%'} src={movie ? TMDB_IMAGE_URL + movie.poster_path : ""} alt={movie ? movie.name : movie.original_name} />
                    </div>
                </div> */}


                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Banner;