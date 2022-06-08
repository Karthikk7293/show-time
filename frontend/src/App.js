import React, { useState,useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import HomeScreen from './pages/HomeScreen';
import ErrorScreen from './pages/ErrorScreen';
import LoginScreen from './pages/LoginScreen';
import SignupScreen from './pages/SignupScreen';
import WatchVideoScreen from './pages/WatchVideoScreen'
import UserProfileScreen from './pages/UserProfileScreen'
import './App.css';
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

function App() {
  const [isAuthenticated, setAuthenticated] = useState(null)
  const { admin, loading } = useSelector((state) => state.admin)


  useEffect(() => {
    let user = localStorage.getItem("userData")
    if (user) {
      user = JSON.parse(user)
      setAuthenticated(user)
    }
  }, [])

  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          {/* user section */}
          <Route path='*' element={<ErrorScreen />} />
          <Route path='/' element={<HomeScreen />} />
          <Route path='/login' element={!isAuthenticated && <LoginScreen />} />
          <Route path='/signup' element={<SignupScreen />} />
          <Route path='/watch/video/:id' element={isAuthenticated ? <WatchVideoScreen /> : <LoginScreen />} />
          <Route path='/user/profile' element={<UserProfileScreen />} />

          {/* content creator section */}
          <Route path='/user/dashboard' element={isAuthenticated ? <Dashboard /> : <LoginScreen />} />
          <Route path='/content/single/:contentId' element={isAuthenticated ? <SingleVideoScreen /> : <LoginScreen />} />
          <Route path='/content/all/subscribers' element={isAuthenticated ? <AllSubscribers /> : <LoginScreen />} />
          <Route path='/content/ad-providers' element={isAuthenticated ? <AdProviders /> : <LoginScreen />} />
          <Route path='/content/upload/video' element={isAuthenticated ? <UploadVideosSecreen /> : <LoginScreen />} />
          {/* <Route path='/content/upload/video' element={<A/>}/> */}
          <Route path='/content/select-movie' element={isAuthenticated ? <SelectMovieScreen /> : <LoginScreen />} />

          {/* admin section */}
          <Route path='/admin/login' element={admin ? <AdminLoginScreen /> : <AdminDashboard />} />
          <Route path='/admin/dashboard' element={admin === true ? <AdminDashboard /> : <AdminLoginScreen />} />
          <Route path='/admin/allusers' element={admin === true ? <AllusersListScreen /> : <AdminLoginScreen />} />



        </Routes>

      </BrowserRouter>
    </div>

  );
}

export default App;
