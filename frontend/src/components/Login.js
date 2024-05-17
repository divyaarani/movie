import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'
import axios from 'axios'

export default function Login() {
    const [email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[userList,setUserList]=useState([])
    const[errorMessage,setErrorMessage]=useState('')
    const auth=useAuth()
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get('https://localhost:3001/users')
        .then(res=>setUserList(res.data))
    },[])
    const handleLogin=(e)=>{
        e.preventDefault()
        const user=userList.find(x=>x.email === email)
        if(user){
            if(user.password === password){
                auth.Login(user)
                navigate('/')
            }
            else{
                setErrorMessage('Incorrect password')
            }
        }
        else{
            setErrorMessage('User Not Found')
        }
    }
  return (
    <div>
      <form className="login"onSubmit={handleLogin}>
        <label style={{color:"white", fontSize:"20px"}}>Email:</label>
        <input id='inp-hme' type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
        <label style={{color:"white", fontSize:"20px"}}>Password:</label>
        <input id='inp-hme' type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
        <button id='btn-nav' type='submit'>Login</button>
      </form>
      {errorMessage}
    </div>
  )
}
