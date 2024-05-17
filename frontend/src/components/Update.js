import React from 'react'
// import './Crud.css'
import { useEffect,useState } from 'react'
import axios from 'axios'

export default function Update() {
    //READ sTATE
    const [list,setList]=useState([])
      //create state

      const[id,setId]=useState('')
      const[Moviename,setMovieName]=useState('')
      const [Desc,setDesc]=useState('')
      const [image,setImage]=useState('')
      const[Timing,setTiming]=useState('')
      //update sate
      const[popUp,setPopUp]=useState(false)
     const[id1,setId1]=useState('')
     const[Moviename1,setMovieName1]=useState('')
      const [Desc1,setDesc1]=useState(0)
      const [image1,setImage1]=useState('')
      const[Timing1,setTiming1]=useState(0)

      //Read operation 

useEffect(()=>{
    axios.get('http://localhost:3001/Admin')
    .then(res=>setList(res.data))
    .catch(err=>console.log(err))
},[])
//Create Operation

const handleSubmit=()=>{
    axios.post('http://localhost:3001/Admin',{id:id,Moviename:Moviename,Desc:Desc,Timing:Timing,image:image})
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
}

//Delete operation
const handleDelete=(deletedata)=>{
    axios.delete(`http://localhost:3001/Admin/${deletedata}`)
    .then(res=>{console.log(res)
    alert("Deleted Successfully")})
    .catch(err=>console.log(err))
}

//Update operation
const OpenPopup =(data)=>{
    setPopUp(true);
    setId1(data.id)
    setMovieName1(data.Moviename)
    setDesc1(data.Desc)
    setImage1(data.image)
    setTiming1(data.Timing)
}
const handleUpdate=()=>{
    axios.put(`http://localhost:3001/Admin/${id1}`,{id:id1,Moviename:Moviename1,Desc:Desc1,image:image1,Timing:Timing1})
    .then(res=>{console.log(res)})
    .catch(err=>console.log(err))
}


  return (
    <div>
        <div className='form-1'>
        {/* form for post operation that is to create a form  */}

        <form onSubmit={handleSubmit}>
        <div className='box1'>
        
        <div className='row'>
            <label>Id:</label>
            <input type='text' value={id} onChange={(e)=>{setId(e.target.value)}} required/>
         </div>
            <div className='row'>
            <label>Movie name:</label>
                <input type="text" value={Moviename} onChange={(e)=>setMovieName(e.target.value)}/>
              </div>

                <div className='row'>
                <label>Desc:</label>
                <input type="text" value={Desc} onChange={(e)=>setDesc(e.target.value)}/>
                </div>

                <div className='row'>
                <label>Timing:</label>
                <select value={Timing} onChange={(e)=>setTiming(e.target.value)}>
                    <option value="8.30am-11.30am">8.30am-11.30am</option>
                    <option value="12.00am-3.00pm">12.00am-3.00pm</option>
                    <option value="3.00pm-6.00pm">3.00pm-6.00pm</option>
                    <option value="7.00pm-10.00pm">7.00pa-10.00pm</option>
                </select>
                </div>

            <div className='row'>
                <label>Image Link:</label>
                <input type="text" value={image} onChange={(e)=>setImage(e.target.value)}/>
                </div>
                <br></br>
                <button  id="btn-nav"type='submit'>Add Data</button>
               
                </div>
            </form>
            </div>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>MOVIENAME</th>
                        <th>DECSP</th>
                        <th>IMAGE</th>
                        <th>TIMIING</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(X=>(<tr key={X.id}>
                        <td>{X.id}</td>
                        <td>{X.Moviename}</td>
                        <td>{X.Desc}</td>
                        <td><img src={X.image} height={150} width={150}/></td>
                        <td>{X.Timing}</td>
                        
                        <td>
                        <button id="btn-nav" onClick={()=>{OpenPopup(X)}}>Update</button>
                        <button id="btn-nav" onClick={()=>handleDelete(X.id)}>Delete</button>
                        </td>
                            
                    </tr>))}
                </tbody>
            </table>

      

            {popUp && 
            <div className='update-popup'>
            
            <div className='form-2'>
            <button className='close-btn' onClick={()=>setPopUp(false)}>X</button>
            <br></br>
                <form onSubmit={handleUpdate}>
                <div className='box1'>
                <h2>Updated Form</h2>
                <div className='row'>
                    <label>Id:</label>
                    <input type='text' value={id1} onChange={(e)=>{setId1(e.target.value)}} required/>
                    </div>
            <div className='row'>
            <label>Name:</label>
                <input type="text" value={Moviename1} onChange={(e)=>setMovieName1(e.target.value)}/>
                </div>
                <div className='row'>
                <label>Marks:</label>
                <input type="text" value={Desc1} onChange={(e)=>setDesc1(e.target.value)}/>
                </div>
                <div className='row'>
                <label>Rating:</label>
                <select value={Timing1} onChange={(e)=>setTiming1(e.target.value)}>
                    <option value="8.30am-11.30am">8.30am-11.30am</option>
                    <option value="12.00am-3.00pm">12.00am-3.00pm</option>
                    <option value="3.00pm-6.00pm">3.00pm-6.00pm</option>
                    <option value="7.00pm-10.00pm">7.00pa-10.00pm</option>
                </select>
                </div>

                <div className='row'>
                <label>Image Link:</label>
                <input type="text" value={image1} onChange={(e)=>setImage1(e.target.value)}/>
                </div>
                <button type='submit'>Update</button>
                <br></br>
                </div>
                </form>
            </div>
            </div>}
    </div>
  )

}