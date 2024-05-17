import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate =useNavigate()
    const handleSubmit=(e)=>{
        axios.post('https://localhost:3001/admin/post',{name,email,password})
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
        navigate('/login')
    }
  return (
    <div>
      <form className='login' onSubmit={handleSubmit}>
        <label style={{color:"white", fontSize:"20px"}}>Name</label><br/>
        <input id='inp-nav' type='text' value={name} onChange={(e)=>setName(e.target.value)}/><br/>
        <label style={{color:"white", fontSize:"20px"}}>Email</label><br/>
        <input id='inp-nav' type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
        <label style={{color:"white", fontSize:"20px"}}>Password</label><br/>
        <input id='inp-nav' type='text' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
        <button id='btn-nav' type='submit'>SignUp</button>
      </form>
    </div>
  )
}
