import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import AdminLayout from '../../components/layouts/AdminLayout'
import { getAllUsers } from '../../Redux/User/Actions/adminAction'

function AdminDashboard() {

  const dispatch = useDispatch();
  const [users, setUsers] = useState(12);

  const { allUsers } = useSelector((state) => state.users)
  // console.log(allUsers);

  useEffect(() => {
    dispatch(getAllUsers())
    
  }, [dispatch])

  return (
    <AdminLayout>
      <Row className='my-3' >
        <Col className='border  mx-auto' lg={2}>
          <h1 className='text-white'>{users}</h1>
        </Col>
        <Col className='border  mx-auto' lg={2}>
          <h1 className='text-white'>{users}</h1>
        </Col>
        <Col className='border  mx-auto' lg={2}>
          <h1 className='text-white'>{users}</h1>
        </Col>
        <Col className='border  mx-auto' lg={2}>
          <h1 className='text-white'>{users}</h1>
        </Col>
        </Row>
        <Row className='my-3'>
        <Col className='border mx-auto' lg={2}>
          <h1 className='text-white'>{users}</h1>
        </Col>
        <Col className='border  mx-auto' lg={2}>
          <h1 className='text-white'>{users}</h1>
        </Col>
        <Col className='border  mx-auto' lg={2}>
          <h1 className='text-white'>{users}</h1>
        </Col>
        <Col className='border  mx-auto' lg={2}>
          <h1 className='text-white'>{users}</h1>
        </Col>
      </Row>
    

    </AdminLayout>
  )
}

export default AdminDashboard