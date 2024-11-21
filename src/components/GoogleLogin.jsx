import React, { useContext, useState } from 'react'
import { FaGoogle } from "react-icons/fa6";
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
export default function GoogleLogin() {

  const {googleSignIn,setUser} = useContext(AuthContext);
  const [error,setError] = useState('');


  const handleSignIn = ()=>{
    googleSignIn()
    .then((result)=>{
      const user = (result.user);
      setUser(user);
    })
    .catch(error=>{
      setError(error.message);
    })
  }

  return (
    <div>
    <div className="*:w-full space-y-2">
    <button onClick={handleSignIn} className="btn">
      <FaGoogle />
      Login with Google
    </button>
    {error&& toast.error(error)}
    </div>
  </div>
  )
}
