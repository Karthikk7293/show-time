import { Avatar } from '@mui/material'
import React, { useEffect } from 'react'
import { Row ,Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllUsers } from '../../Redux/User/Actions/adminAction'

function AllusersListScreen() {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const {allUsers} = useSelector((state)=>state.users)

  useEffect(() => {
    dispatch(getAllUsers())
    
  }, [dispatch])

  const handleBlock = (id) => {

  }

  return (
      <Row className=' px-5'>
        <Col>
        <div className="all-users-list d-flex text-white justify-content-between px-2 my-2 py-2 rounded  shodow ">
        {/* <div className="text-start w-25 my-auto">
          <p className='m-0 h5'>Channel Name</p>
        </div> */}
        <div className="text-start w-25">
          <p className='m-0 h5'>Name</p>
        </div>
        <div className="name w-25">
          <p className='m-0 h5'>Email </p>
        </div>
        <div className="name w-25">
          <p className='m-0 h5' >channel </p>
        </div>
        <div className="name w-25">
          <p className='m-0 h5' >status </p>
        </div>
        <div className="name w-10 text-center">
          <p className='m-0 h5' >view </p>
        </div>

      </div>
      <hr className='text-white m-0 p-0' />
        {allUsers ? allUsers.map((user)=>(
          <div>
          <div className="all-users-list d-flex text-white justify-content-between px-2 my-3 ">
            
            <div className="text-start w-25">
              <p className='m-0'>{user.name}</p>
            </div>
            <div className="name w-25">
              <p className='m-0'>{user.email}</p>
            </div>
            <div className="name w-25">
              <p className='m-0'>{user.channel}</p>
            </div>
            
            <div className="name w-25">
            {user.channel && <button onClick={(()=>navigate(''))} className='border-0 rounded-0 btn btn-primary m-0'>view</button> }
            </div>
            <div className="name ">
            {user.isBlocked ? <button onClick={(()=>handleBlock(user._id))} className='border-0 rounded-0 btn btn-danger'>block</button> 
            : <button onClick={(()=>handleBlock(user._id))} className='border-0 rounded-0 btn btn-success'>block</button> }
            </div>
          </div>
        </div>
          
        )) : ""}
        </Col>
      </Row>
  )
}

export default AllusersListScreen
