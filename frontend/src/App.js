import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import HomeScreen from './pages/HomeScreen';
import ErrorScreen from './pages/ErrorScreen';
import LoginScreen from './pages/LoginScreen';
import SignupScreen from './pages/SignupScreen';
import WatchVideoScreen from './pages/WatchVideoScreen'
import UserProfileScreen from './pages/UserProfileScreen'
import './App.css';

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
      
    </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
