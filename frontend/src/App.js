import React, { useState,useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css';
import HomeScreen from './pages/HomeScreen';
import ErrorScreen from './pages/ErrorScreen';
import LoginScreen from './pages/LoginScreen';
import SignupScreen from './pages/SignupScreen';
import WatchVideoScreen from './pages/WatchVideoScreen'
import UserProfileScreen from './pages/UserProfileScreen'
import Dashboard from './pages/Dashboard';
import UserDashboardLayout from './components/layouts/UserDashboardLayout';
import SingleVideoScreen from './pages/SingleVideoScreen';
import AllSubscribers from './pages/AllSubscribers';
import AdProviders from './pages/Advertisements';
import UploadVideosSecreen from './pages/UploadVideosSecreen';
import SelectMovieScreen from './pages/SelectMovieScreen';
import A from './A'

import AdminLoginScreen from './pages/Admin/AdminLoginScreen';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AllusersListScreen from './pages/Admin/AllusersListScreen';
import AllChannelScreen from './pages/Admin/AllChannelScreen'
import CreateChannelScreen from './pages/CreateChannelScreen';
import AdminLayout from './components/layouts/AdminLayout';
import AdminAccount from './pages/Admin/AdminAccount';
import AllContents from './pages/Admin/AllContents'
import AllAdsScreen from './pages/Admin/AllAdsScreen'
import BlockedContentScreen from './pages/Admin/BlockedContentScreen'
import BlockedAdScreen from './pages/Admin/BlockedAdScreen'
import AdminChatScreen from './pages/Admin/AdminChatScreen.jsx'

function App() {
  const [isAuthenticated, setAuthenticated] = useState(null)
  const [admin,setAdmin] = useState(null)
  const [varifyChannel,setVarifyChannel] = useState(null)

  useEffect(() => {
    let user = localStorage.getItem("userData")
    if (user) {
      user = JSON.parse(user)
      setAuthenticated(user)
      if(user.channel !==" "){
console.log('channel here');
        setVarifyChannel(user)
      }
    }
    console.log("haiii");
    let admin= localStorage.getItem("adminData")
    if(admin){
      admin = JSON.parse(admin)
      setAdmin(admin)
    }

  }, [])

  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          {/* user section */}
          <Route path='*' element={<ErrorScreen />} />
          <Route path='/' element={<HomeScreen />} />
          <Route path='/login' element={ <LoginScreen />} />
          <Route path='/signup' element={<SignupScreen />} />
          <Route path='/watch/video/:id' element={isAuthenticated ? <WatchVideoScreen /> : <LoginScreen />} />
          <Route path='/user/profile' element={<UserProfileScreen />} />
          <Route path='/user/create-channel' element={isAuthenticated ? <CreateChannelScreen/> :<LoginScreen /> }/>

          {/* content creator section */}
          <Route path='/user/dashboard' element={isAuthenticated ? isAuthenticated.channel ? <UserDashboardLayout children={<Dashboard />}/>:<CreateChannelScreen/> : <LoginScreen />} />
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
    </div>

  );
}

export default App;
