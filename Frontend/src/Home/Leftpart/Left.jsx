import React from 'react';
import Search from './Search.jsx';
import Users from './Users.jsx';
import Logout from './Logout.jsx';

const Left = () => {
  return (
    <div className='w-[30%]  bg-black text-gray-300'>
        <Search/>
        <Users/>
        <Logout/>
    </div>
  )
}

export default Left