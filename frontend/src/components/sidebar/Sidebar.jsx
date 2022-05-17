import React, { useState, useEffect,useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cropper from '../cropper/Cropper';
import './sidebar.css'

function Sidebar() {


  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { loading, error, user, isAuthenticated } = useSelector((state) => state.user);
  
  const [profile, setProfile] = useState({ name:user.name, email:user.name });

  console.log(user);

  useEffect(() => {
    let userData = localStorage.getItem("userData");
    if (userData) {
      userData = JSON.parse(userData)
      setProfile({ ...profile, name: userData.name, email: userData.email })
      console.log(userData);
    }else{
      navigate("/login")
    }
    


  }, [ navigate])



  const handleClick = (value) => {
    if(value==="name"){
     
      setName(!name);
    }else if(value==="email"){
      setEmail(!email)
    }else if(value==="password"){
      setPassword(!password)
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();

  }
  return (
    <div className=' profile-sidebar p-3 rounded'>
      <div className="profile-img text-center my-1  ">
        <img width={150} src="https://www.maxpixel.net/static/photo/1x/Mouth-Face-Avatar-Nose-No-Eyes-Man-5781874.png" alt="" />
        <div className="edit-profile-pic mx-auto">
          <p className='h2 text-white mx-auto'><ion-icon name="camera"></ion-icon></p>
        </div>
      </div>
<Cropper/>
      <div className="profile-body  ">
        <div className="name my-3 profile  px-2 rounded d-flex justify-content-between">
          {!name ? (<> <p className='m-0 my-2 ' >{user.name}</p> <span className='my-auto'  onClick={(()=>handleClick("name"))}><ion-icon name="create-outline"></ion-icon></span></>) :
            <input className='m-0 my-2 ' type="text" 
            value={profile.name}  onChange={((e) =>  setProfile({ ...profile, name: e.target.value }))} autoFocus/>}

        </div>
        <div className="email  my-3 px-2 profile rounded d-flex justify-content-between">
          {!email ? (<> <p className='m-0 my-2 '>{user.email}</p> <span className='my-auto' onClick={(()=>handleClick("email"))} ><ion-icon name="create-outline"></ion-icon></span></>) :
            <input className='m-0 my-2 ' type="text" 
            value={profile.email} onChange={((e) => setProfile({ ...profile, email: e.target.value }))} autoFocus />}


        </div>
        <div className="saved-videos email px-2  profile my-3 rounded">
          <p className='m-0 my-2 py-2 '>saved videos</p>
        </div>
        <div className="subscribed-channels px-2 profile  my-3  rounded">
          <p className='m-0 my-2 py-2 '>subscribed</p>
        </div>
        <div className="password  profile my-3 px-2 rounded d-flex justify-content-between">
          {!password ? (<> <p className='m-0 my-2 '> password</p><span className='my-auto' onClick={(()=>handleClick("password"))}><ion-icon name="create-outline"></ion-icon></span></>) :
            <input className='m-0 my-2 ' type="text" placeholder='password' autoFocus />}

        </div>
        <div className="profile-submit profile rounded  my-2 text-center ">
          <input type="submit" value="SAVE CHANGES " onClick={handleSubmit} className=' rounded w-100 py-2' />
        </div>
      </div>
    </div>
  )
}

export default Sidebar