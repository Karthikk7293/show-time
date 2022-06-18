import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../Redux/User/Actions/adminAction'

function AllChannelScreen() {

  const dispatch = useDispatch()

  const { allUsers } = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  return (
    <div>
      <div className="all-users-list d-flex text-white justify-content-between px-2 my-3 py-3 rounded  shodow ">
        <div className="text-start w-25 my-auto">
          <p className='m-0 h5'>Channel Name</p>
        </div>
        <div className="text-start w-25">
          <p className='m-0 h5'>Name</p>
        </div>
        <div className="name w-25">
          <p className='m-0 h5'>Email </p>
        </div>
        <div className="name w-25">
          <p className='m-0 h5' >About </p>
        </div>

      </div>
      <hr className='text-white m-0 p-0' />
      {allUsers && allUsers.map((user) => (
        <div>
          {user?.channel ? (
            <div>
              <div className="all-users-list d-flex text-white justify-content-between px-2 my-3 ">
                <div className="text-start w-25 my-auto" style={{ borderLeft: "1px solid green", borderRight: "1px solid green" }}>
                  <p className='m-0'>{user.channel}</p>
                </div>
                <div className="text-start w-25">
                  <p className='m-0'>{user.name}</p>
                </div>
                <div className="name w-25">
                  <p className='m-0'>{user.email}</p>
                </div>
                <div className="name w-25">
                  <p className='m-0' >{user.about} </p>
                </div>
              </div>
            </div>
          ) : ""}
        </div>

      ))}


    </div>
  )
}

export default AllChannelScreen