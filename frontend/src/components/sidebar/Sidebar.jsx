import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import CropImage from '../cropper/CropImage';
import { FormControl } from 'react-bootstrap';
import './sidebar.css'
import { loadUser, updateProfile } from '../../Redux/User/Actions/userActions';
import { USER_AVATAR } from '../../assets/icons';
import Loader from '../icons/Loader';

function Sidebar({ admin }) {


  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [showCropper, setShowCropper] = useState(false)
  const [cropImage, setCropImage] = useState(false)
  const [image, setImage] = useState(null)
  const [thumbnail,setThumbnail] = useState(true)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if(name||email||password){
    setTimeout(()=>{
      setName(false)
      setEmail(false)
      setPassword(false)

    },20000)
  }

  const { loading, error, userData, isAuthenticated, update } = useSelector((state) => state.user);


  const [profile, setProfile] = useState({ name: "", email: "" });
  const [data, setData] = useState("");


  useEffect(() => {
    let userData = localStorage.getItem("userData");
    if (userData) {
      userData = JSON.parse(userData)
      setData(userData)
    } else {
      navigate("/login")
    }

  }, [navigate,update])



  const handleClick = (value) => {
    if (value === "name") {

      setName(!name);
    } else if (value === "email") {
      setEmail(!email)
    } else if (value === "password") {
      setPassword(!password)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const data = { name: profile.name, email: profile.email, image }
    dispatch(updateProfile(data))


  }
  return (
    <div className=' profile-sidebar p-3 rounded'  >
      <div className={`profile-img text-center my-1 ${admin ? "d-none" : ""} `} >
        {!image ? (<img width={150} src={data.avatar ? data.avatar.url : USER_AVATAR }  alt="" />) : (<img width={150} src={image ? image : USER_AVATAR} alt=""  />)}

        <div className="edit-profile-pic mx-auto">
          <FormControl
            className=" d-none"
            id="upload_image"
            type="file"
            onChange={(e) => {
              setCropImage(e.target.files[0])
              setShowCropper(true)
            }}
            accept=".jpg,.jpeg,.png,"
          />
          <label for="upload_image" ><span class="profilepic__icon"> <p className='h2 text-white mx-auto'><ion-icon name="camera"></ion-icon></p></span></label>

        </div>
      </div>

      {loading ? <Loader /> : ""}
      {showCropper && (
        <CropImage
        cropRatio={{width:500,height:500}}
          src={cropImage}
          imageCallback={(image) => {
            setImage(image)
            setShowCropper(false)
          }}
          closeHander={() => {
            setShowCropper(false)
          }}
        />
      )}

      <div className="profile-body  ">
        <div className="saved-videos email px-2  profile my-3 rounded">
          <Link to={'/user/dashboard'} > <p className='m-0 my-2 py-2 text-white  '>Dash board</p></Link>
        </div>
        <div className="name my-3 profile  px-2 rounded d-flex justify-content-between">
          {!name ? (<> <p className='m-0 my-2 ' >{data.name}</p> <span className='my-auto' onClick={(() => handleClick("name"))}><ion-icon name="create-outline"></ion-icon></span></>) :
            <input className='m-0 my-2 ' type="text" placeholder={data.name}
              value={profile.name} onChange={((e) => setProfile({ ...profile, name: e.target.value }))} autoFocus />}

        </div>
        <div className="email  my-3 px-2 profile rounded d-flex justify-content-between">
          {!email ? (<> <p className='m-0 my-2 '>{data.email}</p> <span className='my-auto' onClick={(() => handleClick("email"))} ><ion-icon name="create-outline"></ion-icon></span></>) :
            <input className='m-0 my-2 ' type="text" placeholder={data.email}
              value={profile.email} onChange={((e) => setProfile({ ...profile, email: e.target.value }))} autoFocus />}


        </div>
        <div className="saved-videos email px-2  profile my-3 rounded">

          <Link to={'/user/dashboard'} > <p className='m-0 my-2 py-2 text-white text-capitalize'>saved videos</p></Link>
        </div>
        <div className="subscribed-channels px-2 profile  my-3  rounded">
         {admin ?  <Link to={'/content/all/subscribers'} > <p className='m-0 my-2 py-2 text-white text-capitalize'>subscribers</p></Link> : 
         <Link to={'/user/dashboard'} > <p className='m-0 my-2 py-2 text-white text-capitalize'>subscribed</p></Link>}
        </div>
        <div className="subscribed-channels px-2 profile  my-3  rounded">
         {admin ?  <Link to={'/content/ad-providers'} > <p className='m-0 my-2 py-2 text-white text-capitalize'>advertizement proverders</p></Link> : ""}
        </div>
        <div className="subscribed-channels px-2 profile  my-3  rounded">
         {admin ?  <Link to={'/user/dashboard'} > <p className='m-0 my-2 py-2 text-white text-capitalize'>payment details</p></Link> : ""}
        </div>
        <div className="subscribed-channels px-2 profile  my-3  rounded">
         {admin ?  <Link to={'/user/dashboard'} > <p className='m-0 my-2 py-2 text-white'>chat</p></Link> : ""}
        </div>
        <div className="password  profile my-3 px-2 rounded d-flex justify-content-between">
          {!password ? (<> <p className='m-0 my-2 '> password</p><span className='my-auto' onClick={(() => handleClick("password"))}><ion-icon name="create-outline"></ion-icon></span></>) :
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