import { Avatar } from '@mui/material'
import React, { useEffect } from 'react'
import { Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import AdminLayout from '../../components/layouts/AdminLayout'
import { getAllUsers } from '../../Redux/User/Actions/adminAction'

function AllusersListScreen() {

  const dispatch = useDispatch()

  const {allUsers} = useSelector((state)=>state.users)

  useEffect(() => {
    dispatch(getAllUsers())
    
  }, [dispatch])

  const handleBlock = (id) => {
console.log(id);
  }

  return (
    <AdminLayout>
      <Row className=' px-5'>
        {allUsers ? allUsers.map((user)=>(
          <div className="user-list-main text-white d-flex my-2 shadow justify-content-between">
          <div className="user-list-avatar m-3">
            <Avatar src={ user.avatar ? user.avatar.url : ""}/>
          </div>
          <div className="user-list-body my-auto ms-2">
            <p className='my-auto p-0 me-5'>{user.name}</p>
          </div>
          <div className="user-list-body my-auto">
            <p className='my-auto'>{user.email}</p>
          </div>
          <div className="user-list-body my-auto">
            {user.isBlocked ? <button onClick={(()=>handleBlock(user._id))} className='border-0 rounded-0 btn btn-danger'>block</button> 
            : <button onClick={(()=>handleBlock(user._id))} className='border-0 rounded-0 btn btn-success'>block</button> }
            
          </div>
        </div>
        )) : ""}
        
      </Row>
    </AdminLayout>
  )
}

export default AllusersListScreen
