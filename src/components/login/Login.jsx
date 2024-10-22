import React, { useState } from 'react'
import './login.css'
import ChatList from '../list/chatList/ChatList'
import { toast } from 'react-toastify'

import app from '../lib/firebase.js'
import {createUserWithEmailAndPassword,getAuth} from 'firebase/auth'

const Login = () => {

  const [avatar, setAvatar] = useState({
    file: null,
    url: ""
  })

  const handleImage = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      })
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();
    toast.error("Sucessfull Login");
  }

  const handleRegister = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData)

    try {
        const auth = getAuth(app)
        const res = await createUserWithEmailAndPassword(auth , email , password);
          console.log(res)
        toast.success("User Created Successfully")
      
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }



  return (
    <div className='login'>
      <div className="iteam">
        <h2>Welcome back,</h2>
        <form onSubmit={handleLogin}>
          <input type='text' placeholder='Enter email' name='email' />
          <input type='password' placeholder='Enter password' name='password' />
          <button>Sign In</button>
        </form>
      </div>
      <div className='seprater'></div>
      <div className="iteam">
        <h2>Create a Account</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor='files'>
            <img src={avatar.url || './avatar.png'} />
            Upload an Image</label>

          <input type='file' id="files" style={{ display: "none" }} onChange={handleImage} />
          <input type='text' placeholder='Username' name='username' />
          <input type='email' placeholder='Email' name='email' />
          <input type='password' placeholder='Enter password' name='password' />
          <button>Sign Up</button>
        </form>
      </div>

    </div>
  )
}

export default Login