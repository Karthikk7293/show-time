import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

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

function App() {
  return (
    <div className="main">
<BrowserRouter>
    <Routes>
      <Route path='*' element={<ErrorScreen/>}/>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/login' element={<LoginScreen/>}/>
      <Route path='/signup' element={<SignupScreen/>}/>
      <Route path='/watch/video' element={<WatchVideoScreen/>}/>
      
      <Route path='/user/profile' element={<UserProfileScreen/>}/>
      <Route path='/user/dashboard' element={<Dashboard/>}/>

      <Route path='/content/single' element={<SingleVideoScreen/>}/>
      
      
    </Routes>
  
    </BrowserRouter>
    </div>
    
  );
}

export default App;
