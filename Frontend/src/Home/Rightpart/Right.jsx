import React from 'react'
import Chatuser from './Chatuser'
import Messages from './Messages'
import Typesend from './Typesend'

const Right = () => {
  return (
    <div className='w-[70%] bg-slate-900 text-gray-300'>
      <Chatuser/>
      <div style={{minHeight:"calc(90vh - 10vh)"}}>
        <Messages/>
      </div>
      <Typesend/>
    </div>
  )
}

export default Right