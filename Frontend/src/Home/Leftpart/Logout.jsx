import React,{useState} from 'react'
import { BiLogOutCircle } from "react-icons/bi";
import axios from 'axios';
import Cookies from 'js-cookie';

const Logout = () => {

  const [loading,setLoading] = useState(false);

  const handleLogout= async ()=>{
    setLoading(true);
    try {
      const res=axios.post('/api/user/logout');
      localStorage.removeItem("LetsChat");
      Cookies.remove("jwt");
      setLoading(false);
      alert("Logged out successfully");
    } catch (error) {
      console.log("Error in Logout",error)
    }
  }
  

  return (
    <>
    <hr />
    <div className="h-[10vh]">
        <div>
            <BiLogOutCircle className='text-5xl text-white hover:bg-slate-700 duration-300 cursor-pointer rounded-full p-2 ml-2 mt-1' onClick={handleLogout} />
        </div>        
    </div>
    </>
  )
}

export default Logout