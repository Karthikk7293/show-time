import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import MovieCard from '../components/movieCard/MovieCard'
import UserDashboardLayout from '../components/layouts/UserDashboardLayout'
import { useDispatch, useSelector } from 'react-redux';
import { getAllContents } from '../Redux/User/Actions/contentActions';

export default function Dashboard() {

  const dispatch = useDispatch();
  const [videos,setVideos] = useState(null);
  const {contents} = useSelector((state)=>state.content)
  const  {userData} = useSelector((state)=>state.user)
  // console.log(userData,'user details');
  // console.log(contents);

  useEffect(()=>{
    
    dispatch(getAllContents())
    setVideos(contents.filter((data)=>(
      data.owner===userData._id
      )))
  },[dispatch])
  
  
  return (
    <Row>
      {videos?.map((video)=>(
        <Col lg={4} key={video._id} className="my-2">
        <MovieCard video={video} count={video.likes?.lenght} />
      </Col>
      ))}
    </Row>

  )
}
