import React from 'react';
import Left from './Home/Leftpart/Left';
import Right from './Home/Rightpart/Right';
import Signup from './components/Signup';
import Login from './components/Login';
import { useAuth } from './context/AuthProvider.jsx'
import {Navigate, Route, Routes} from 'react-router-dom';

const App = () => {

  const [authUser, setAuthUser] = useAuth();
  // console.log(authUser);

  return (
    <Routes>
      <Route path='/' element={
        authUser ? (
          <div className='overflow-y-hidden'>
            <div className='flex h-screen'>
              <Left />
              <Right />
            </div>
          </div>
        ) : (<Navigate to={"/login"} />)
      } />
      <Route path='/login' element={authUser ? <Navigate to="/" />:<Login/>} />
      <Route path='/signup' element={authUser ? <Navigate to="/" />:<Signup/>} />
    </Routes>
  )
}

export default App
