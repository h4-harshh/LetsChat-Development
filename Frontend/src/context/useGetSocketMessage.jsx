import React, { useEffect } from 'react'
import { useSocketContext } from './SocketContext'
import useConverstation from '../zustand/useConversation.js';
import sound from "../assets/notification.mp3";

const useGetSocketMessage = () => {
    const {socket}=useSocketContext();
    const {messages,setMessage}=useConverstation();

    useEffect(()=>{
        socket.on("newMessage",(newMessage)=>{
            const notification=new Audio(sound);
            notification.play();
            setMessage([...messages,newMessage]);
        });
        return ()=>{
            socket.off("newMessage");
        };
    },[socket,messages,setMessage])
}

export default useGetSocketMessage