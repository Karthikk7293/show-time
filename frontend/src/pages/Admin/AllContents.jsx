import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import MovieCard from '../../components/movieCard/MovieCard'
import { getAllContents } from '../../Redux/User/Actions/contentActions'

function AllContents() {
  const dispatch = useDispatch()
  const [videos, setVideos] = useState(null);
  const { contents } = useSelector((state) => state.content)

  useEffect(() => {

    dispatch(getAllContents())
    setVideos(contents)
  }, [dispatch])

  return (
    <Row>
      {videos?.map((video) => (
        <Col className='my-2' key={video._id} lg={4}>
          <MovieCard video={video} count={video.likes?.lenght} />
        </Col>
      ))}

    </Row>
  )
}

export default AllContents