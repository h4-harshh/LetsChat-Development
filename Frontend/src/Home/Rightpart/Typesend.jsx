import React from 'react'
import { IoSend } from "react-icons/io5";

const Typesend = () => {
  return (
    <div className='flex h-[10vh] space-x-1 bg-gray-800 items-center justify-center'>
        <div className='w-[70%] mx-4  rounded-xl'>
            <input type="text" placeholder="Type here" className="bg-gray-900 py-2 w-full border mt-1  border-gray-700 outline-none px-4  rounded-lg bg-transparent" />
        </div>
        <button className='text-3xl'>    
            <IoSend/>
        </button>
    </div>
  )
}

export default Typesend