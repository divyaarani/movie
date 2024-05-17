import React, { useState } from 'react'
import axios from 'axios'

export default function MovieAdminForm() {
    const[image,setImage]=useState('')
    const[name,setName]=useState('')
    const[details,setDetails]=useState('')
    const[year,setYear]=useState('')
    const[director,setDirector]=useState('')
    const[cast,setCast]=useState('')
    const handleSubmit=()=>{
        axios.post('http://localhost:3002/Admin',{image,name,details,year,director,cast})
        .then(res=>{console.log(res);alert('success')})
        .catch(err=>{console.log(err)})
    }
    
  return (
    <div>
        <div className='form-1  '>
            <form onSubmit={handleSubmit}>
                <label>Poster:</label>
                <input type='text' value={image} onChange={(e=>{setImage(e.target.value)})}/><br/>
                <label>Movie Name:</label>
                <input type='text' value={name} onChange={(e=>{setName(e.target.value)})}/><br/>
                <label>Details:</label>
                <input type='text' value={details} onChange={(e=>{setDetails(e.target.value)})}/><br/>
                <label>Year:</label>
                <input type='text' value={year} onChange={(e=>{setYear(e.target.value)})}/><br/>
                <label>Director:</label>
                <input type='text' value={director} onChange={(e=>{setDirector(e.target.value)})}/><br/>
                <label>Cast:</label>
                <input type='text' value={cast} onChange={(e=>{setCast(e.target.value)})}/><br/>
                
                <button id="btn-nav" type='submit'>Submit</button>

            </form>
        </div>
    </div>
  )
}
