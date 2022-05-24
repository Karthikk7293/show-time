import React from 'react'
import { Col, Row } from 'react-bootstrap'
import MovieCard from '../components/movieCard/MovieCard'
import UserDashboardLayout from '../components/layouts/UserDashboardLayout'

export default function Dashboard() {
  return (
    <UserDashboardLayout>
    <Row>
      <Col lg={4} className="my-2">
        <MovieCard />
      </Col>
      <Col lg={4} className="my-2">
        <MovieCard />
      </Col>
      <Col lg={4} className="my-2">
        <MovieCard />
      </Col>
      <Col lg={4} className="my-2">
        <MovieCard />
      </Col>
    </Row>
    </UserDashboardLayout>

  )
}
