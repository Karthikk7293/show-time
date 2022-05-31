import React, { useState, forwardRef } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './modal.css'
import { TMDB_IMAGE_URL } from '../TMDB/TMDB_CONSTANTS';
import { useDispatch } from 'react-redux';
import { selectMovie } from '../../Redux/User/Actions/contentActions';


const Fade = forwardRef(function Fade({ children }) {
    return (
        <div>
            {children}
        </div>
    );
});

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60%",
    height: "65vh",
    bgcolor: 'backgrond.paper',

};


function MovieModal({ open, setOpen, movie }) {
    // console.log(movie);

    const dispatch = useDispatch()
    const handleSelect = (movieDetails) => {
        dispatch(selectMovie(movieDetails))
        setOpen(!open)
    }
    return (
        <div>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                onClose={(() => setOpen(!open))}
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 300,
                }}
            >
                <Fade in={open}>
                    <Box sx={style} className="rounded modal-box rounded" style={{ overflow: "hidden", backgroundImage: `url(${movie ? TMDB_IMAGE_URL + movie.backdrop_path : "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(75,75,75,0.99) 100%, rgba(0,212,255,1) 100%)"})`, backgroundSize: "100%" }} >

                        <div className="movie-info-container">
                            <div className="movie-top my-3 mx-auto px-4 ">
                                <div className="img-1 m-2">
                                    <img className="img-0 rounded" src={movie ? TMDB_IMAGE_URL + movie.poster_path : ""} alt="" />
                                </div>
                                <div className=" text-white my-3 ">
                                    <h2>{movie ? movie.title : movie.original_title}</h2>
                                    <div className='d-flex justify-content-between my-2'>
                                        <span>IMDb:</span>
                                        <span>{movie && movie.vote_average} /{movie && movie.vote_count} </span>
                                    </div>
                                    <div className='d-flex justify-content-between my-2' >
                                        <span>Popularity : </span>
                                        <span>{movie.popularity}</span>
                                    </div>
                                    <div className='d-flex justify-content-between my-2'>
                                        <span>Release Date:</span>
                                        <span>{movie?.release_date}</span>
                                    </div>
                                    <div className="my-2  text-white">
                                        <p>
                                            {movie?.overview}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-end mx-5">
                                <button className='px-3 py-2 border-0 bg-danger text-white shadow' onClick={(() => handleSelect(movie))}>select-movie</button>
                            </div>

                        </div>
                    </Box>

                </Fade>
            </Modal>
        </div>
    )
}

export default MovieModal