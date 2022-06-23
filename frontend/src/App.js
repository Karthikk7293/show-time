import React, { useState,useEffect ,lazy ,Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import ErrorScreen from './pages/ErrorScreen';
import { LOADER_GIF_IMAGE } from './assets/icons';
import { loadUser } from './Redux/User/Actions/userActions';
import { useAlert } from 'react-alert';

const HomeScreen = lazy(()=>import('./pages/HomeScreen'))
const LoginScreen = lazy(()=>import('./pages/LoginScreen'))
const SignupScreen = lazy(()=>import('./pages/SignupScreen'))
const WatchVideoScreen = lazy(()=>import('./pages/WatchVideoScreen'))
const UserProfileScreen = lazy(()=>import('./pages/UserProfileScreen'))
const Dashboard = lazy(()=>import('./pages/Dashboard'))
const UserDashboardLayout = lazy(()=>import('./components/layouts/UserDashboardLayout'))
const SingleVideoScreen = lazy(()=>import('./pages/SingleVideoScreen'))
const AllSubscribers = lazy(()=>import('./pages/AllSubscribers'))
const AdProviders = lazy(()=>import('./pages/Advertisements'))
const UploadVideosSecreen = lazy(()=>import('./pages/UploadVideosSecreen'))
const SelectMovieScreen = lazy(()=>import('./pages/SelectMovieScreen'))

const AdminLoginScreen = lazy(()=>import('./pages/Admin/AdminLoginScreen'))
const AdminDashboard = lazy(()=>import('./pages/Admin/AdminDashboard'))
const AllusersListScreen = lazy(()=>import('./pages/Admin/AllusersListScreen'))
const AllChannelScreen = lazy(()=>import('./pages/Admin/AllChannelScreen'))
const CreateChannelScreen = lazy(()=>import("./pages/CreateChannelScreen"))
const AdminLayout = lazy(()=>import("./components/layouts/AdminLayout"))
const AdminAccount = lazy(()=>import("./pages/Admin/AdminAccount"))
const AllContents = lazy(()=>import("./pages/Admin/AllContents"))
const BlockedContentScreen = lazy(()=>import("./pages/Admin/BlockedContentScreen"))
const BlockedAdScreen = lazy(()=>import("./pages/Admin/BlockedAdScreen"))
const AdminChatScreen = lazy(()=>import('./pages/Admin/AdminChatScreen'))
const AllAdsScreen = lazy(()=>import('./pages/Admin/AllAdsScreen'))

function App() {
  const [admin,setAdmin] = useState(null)
  const [channel,setChannel] = useState(false)
  const dispatch = useDispatch()
  const alert = useAlert()
  const {user,isAuthenticated,error,userData} =useSelector((state)=>state.user)

  console.log(isAuthenticated);

  useEffect(() => {
    if(!user){
      dispatch(loadUser())
    }
  }, [dispatch,user,alert,error])

  return (
    <div className="main">
      <Suspense fallback={<div className='py-5' style={{justifyContent:"center",textAlign:"center" }} ><img width={"40"} src={LOADER_GIF_IMAGE} alt='loading...' /></div>}>
      <BrowserRouter>
        <Routes>
          {/* user section */}
          <Route path='*' element={<ErrorScreen />} />
          <Route path='/' element={<HomeScreen />} />
          <Route path='/login' element={ <LoginScreen />} />
          <Route path='/signup' element={<SignupScreen />} />
          <Route path='/watch/video/:id' element={ <WatchVideoScreen /> } />
          <Route path='/user/profile' element={<UserProfileScreen />} />
          <Route path='/user/create-channel' element={isAuthenticated ? <CreateChannelScreen/> :<LoginScreen /> }/>

          {/* content creator section */}
          <Route path='/user/dashboard' element={isAuthenticated ? userData.channel ? <UserDashboardLayout children={<Dashboard />}/>:<CreateChannelScreen/> : <LoginScreen />} />
          <Route path='/content/single/:contentId' element={isAuthenticated ? <UserDashboardLayout children={<SingleVideoScreen />}/> : <LoginScreen />} />
          <Route path='/content/all/subscribers' element={isAuthenticated ? <UserDashboardLayout children={<AllSubscribers /> }/> : <LoginScreen />} />
          <Route path='/content/ad-providers' element={isAuthenticated ? <UserDashboardLayout children={<AdProviders /> }/> : <LoginScreen />} />
          <Route path='/content/upload/video' element={isAuthenticated ? <UserDashboardLayout children={<UploadVideosSecreen /> }/>   : <LoginScreen />} />
          <Route path='/content/select-movie' element={isAuthenticated ? <UserDashboardLayout children={<SelectMovieScreen /> }/> : <LoginScreen />} />
          {/* <Route path='/content/upload/video' element={<A/>}/> */}

          {/* admin section */}
          <Route path='/admin/login' element={ <AdminLoginScreen /> } />
          <Route path='/admin/dashboard' element={admin ? <AdminLayout children={<AdminDashboard />}/> : <AdminLoginScreen />} />
          <Route path='/admin/all-users' element={admin ? <AdminLayout children={<AllusersListScreen />}/>  : <AdminLoginScreen />} />
          <Route path='/admin/all-channels' element={admin ? <AdminLayout children={<AllChannelScreen />}/>  : <AdminLoginScreen />} />
          <Route path='/admin/all-ad-providers' element={admin ? <AdminLayout children={<AllChannelScreen />}/>  : <AdminLoginScreen />} />
          <Route path='/admin/all-contents' element={admin ? <AdminLayout children={<AllContents />}/>  : <AdminLoginScreen />} />
          <Route path='/admin/all-ads' element={admin ? <AdminLayout children={<AllAdsScreen />}/>  : <AdminLoginScreen />} />
          <Route path='/admin/blocked-contents' element={admin ? <AdminLayout children={<BlockedContentScreen />}/>  : <AdminLoginScreen />} />
          <Route path='/admin/blocked-ads' element={admin ? <AdminLayout children={<BlockedAdScreen />}/>  : <AdminLoginScreen />} />
          <Route path='/admin/chat' element={admin ? <AdminLayout children={<AdminChatScreen />}/>  : <AdminLoginScreen />} />
         
          <Route path='/admin/account' element={admin ? <AdminAccount /> : <AdminLoginScreen />} />



        </Routes>

      </BrowserRouter>
      </Suspense>
    </div>

  );
}

export default App;
