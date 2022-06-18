import React ,{useState} from 'react'
import { Container, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { USER_AVATAR } from '../../assets/icons'
import CropImage from '../cropper/CropImage'
import Loader from '../icons/Loader'
import './sidebar.css'

function AdminSidebar() {
    const [showCropper, setShowCropper] = useState(false)
    const [cropImage, setCropImage] = useState(false)
    const [image, setImage] = useState(null)
  return (
       <div className="profile-sidebar p-3 mx-2" >
       <div className={`profile-img text-center my-1`} >
        {!image ? (<img width={150} src={ USER_AVATAR }  alt="" />) : (<img width={150} src={image ? image : USER_AVATAR} alt=""  />)}

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

      {/* {loading ? <Loader /> : ""} */}
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
  <Link to={'/admin/dashboard'} > <p className='m-0 my-2 py-2 text-white  '>Dashboard</p></Link>
</div>

<div className="saved-videos email px-2  profile my-3 rounded">
  <Link to={'/admin/all-ad-providers'} > <p className='m-0 my-2 py-2 text-white  '>Ad Providers</p></Link>
</div>
<div className="saved-videos email px-2  profile my-3 rounded">
  <Link to={'/admin/all-channels'} > <p className='m-0 my-2 py-2 text-white  '>channels</p></Link>
</div>
<div className="saved-videos email px-2  profile my-3 rounded">
  <Link to={'/admin/all-users'} > <p className='m-0 my-2 py-2 text-white  '>users</p></Link>
</div>
<div className="saved-videos email px-2  profile my-3 rounded">
  <Link to={'/admin/all-contents'} > <p className='m-0 my-2 py-2 text-white  '>All contents</p></Link>
</div>
<div className="saved-videos email px-2  profile my-3 rounded">
  <Link to={'/admin/all-ads'} > <p className='m-0 my-2 py-2 text-white  '>All Ads</p></Link>
</div>
<div className="saved-videos email px-2  profile my-3 rounded">
  <Link to={'/admin/blocked-contends'} > <p className='m-0 my-2 py-2 text-white  '>blocked videos</p></Link>
</div>
<div className="saved-videos email px-2  profile my-3 rounded">
  <Link to={'/admin/blocked-ads'} > <p className='m-0 my-2 py-2 text-white  '>blocked ads</p></Link>
</div>
<div className="saved-videos email px-2  profile my-3 rounded">
  <Link to={'/admin/payment'} > <p className='m-0 my-2 py-2 text-white  '>Payment details</p></Link>
</div>
<div className="saved-videos email px-2  profile my-3 rounded">
  <Link to={'/admin/chat'} > <p className='m-0 my-2 py-2 text-white  '>Chat</p></Link>
</div>
<div className="saved-videos email px-2  profile my-3 rounded">
  <Link to={'/admin/account'} > <p className='m-0 my-2 py-2 text-white  '>Account</p></Link>
</div>
</div>
       </div>
       
  )
}

export default AdminSidebar