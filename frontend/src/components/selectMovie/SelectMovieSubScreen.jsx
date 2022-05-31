import React, { useState ,useEffect} from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import MovieModal from './MovieModal';
import { findMovie, sortMovie } from '../TMDB/findMovies';
import { TMDB_IMAGE_URL } from '../TMDB/TMDB_CONSTANTS';


function SelectMovieSubScreen({category,language}) {


    const [open, setOpen] = useState(false);
    const [count,setCount] = useState(0);
    const [movie, setMovie] = useState([]);
    const [currentMovie,setCurrentMovie] = useState(null);

    console.log(category," ",language,count);
    // setMovie( movie.length = Math.min(movie.length, 4))
    useEffect(() => {
      findMovie(category,language,count).then((response)=>{
        
        const result = sortMovie(response,count)
        setMovie(result)
      
      })
       
    }, [category,language,count])
    

const selectSingleMovie = (value)=>{
    setOpen(!open)
    setCurrentMovie(value)
    
}

    return (
        <Container fluid>
            <Row className='mx-auto'>
                { movie ? movie.map((item,index)=>(
                    <Col className='my-2' key={item.id} lg={4}>
                     <div className="select-movie-image">
                        {currentMovie && <MovieModal open={open} setOpen={setOpen} movie={currentMovie} />} 
                         <img className='rounded' width={200} onClick={(() => selectSingleMovie(item))} src={movie ? TMDB_IMAGE_URL+item.poster_path : ""} alt="" />
                     </div>
                     <div className="select-movie-description">
                     </div>
                 </Col>

                )) : "" }
            </Row>
            <Row className='text-center '>
                <Col className='text-white d-flex mx-auto mt-4' lg={10}>
                    <Stack className='text-white mx-auto' spacing={2}>
                        <Pagination className='text-white' color="primary" onChange={((event)=>setCount(event.currentTarget.textContent))} count={10} shape="rounded" />
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}

export default SelectMovieSubScreen