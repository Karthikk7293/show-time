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
  const  {userDetails} = useSelector((state)=>state.user)
  // console.log(userDetails,'user details');
  // console.log(contents);

  useEffect(()=>{
    
    dispatch(getAllContents())
    setVideos(contents.filter((data)=>(
      data.owner===userDetails._id
      )))
  },[dispatch])
  
  
  console.log(videos);
  return (
    <UserDashboardLayout>
    <Row>
      {videos?.map((video)=>(
        <Col lg={4} key={video._id} className="my-2">
        <MovieCard video={video} count={video.likes?.lenght} />
      </Col>
      ))}
    </Row>
    </UserDashboardLayout>

  )
}
