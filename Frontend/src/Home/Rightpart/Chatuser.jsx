import React from 'react'
import useConversation from '../../zustand/useConversation.js';
import { useSocketContext } from '../../context/SocketContext.jsx';


const Chatuser = () => {

  const {selectedConversation}=useConversation();
  const {onlineUsers}=useSocketContext();
  const getOnlineUsers=(userId)=>{
    return onlineUsers.includes(userId)?"online":"offline";
  }


  const isOnline=getOnlineUsers(selectedConversation._id);
  

  return (
    <div className='flex space-x-3 items-center justify-center h-[10vh] bg-gray-800 hover:bg-gray-700 duration-300'>
        <div className={`avatar ${isOnline === "online"?"online":""}`}>
            <div className="w-16 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
        </div>
        <div>
            <h1 className='xl'>{selectedConversation.fullname}</h1>
            <span className='sm'>{getOnlineUsers(selectedConversation._id)}</span>
        </div>
    </div>
  )
}

export default Chatuser