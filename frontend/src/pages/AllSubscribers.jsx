import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CommentCard from '../components/comments/CommentCard'
import UserDashboardLayout from '../components/layouts/UserDashboardLayout'

function AllSubscribers() {
  return (
        <Row className="">
            <Col className='all-subscribers-main' lg={10}>
                <div className="all-subscibers-title">
                    <p className='text-uppercase text-white m-3'>all subscibers (12345)</p>
                </div>
                <div className="all-subscribers-body">
                    <CommentCard content/>
                </div>
            </Col>
        </Row>
  )
}

export default AllSubscribers