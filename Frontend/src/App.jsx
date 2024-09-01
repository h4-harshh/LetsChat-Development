import React from 'react';
import Left from './Home/Leftpart/Left';
import Right from './Home/Rightpart/Right';
import Signup from './components/Signup';
import Login from './components/Login';

const App = () => {
  return (
    // <div className='overflow-y-hidden'>
    //   <div className='flex h-screen'>
    //     <Left/>
    //     <Right/>
    //   </div>
    // </div>
    <Signup/>
    // <Login/>
  )
}

export default App
