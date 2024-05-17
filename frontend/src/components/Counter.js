import React, { useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import image1 from './Images/image5.png'
import image2 from './Images/image2.png'
import image3 from './Images/image3.png'
import image4 from './Images/image4.png'
export default function Counter() {
  const[count1,setCount1]=useState(0)
  const[count2,setCount2]=useState(0)
  const[count3,setCount3]=useState(0)
  const[count4,setCount4]=useState(0)
  const[open,SetOpen]=useState(false)
 
  const Handleone=()=>{
    axios.post('http://localhost:3003/vote',{vote:count1})
    .then(res=>{console.log(res)})
    .catch(error=>{console.log(error)})
    setCount1(count1+1)
    SetOpen(true);
  }
  const Handletwo=()=>{
    axios.post('http://localhost:3003/vote',{vote:count2})
    .then(res=>{console.log(res)})
    setCount2(count2+1)
    SetOpen(true);
  }
  const Handlethree=()=>{
    axios.post('http://localhost:3003/vote',{vote:count3})
    .then(res=>{console.log(res)})
    setCount3(count3+1)
    SetOpen(true);
  }
  const Handlefour=()=>{
    axios.post('http://localhost:3003/vote',{vote:count4})
    .then(res=>{console.log(res)})
    setCount4(count4+1)
    SetOpen(true);
  }
  return (
    <div classname="vote">
      <div className='row'>
        <div className='col-sm-3'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image1} height={300} />
        <Card.Body>
          <button onClick={Handleone} >vote</button>
        </Card.Body>
      </Card>
      </div>
      <div className='col-sm-3'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image2} height={300}/>
        <Card.Body>
          <button onClick={Handletwo} >vote</button>
        </Card.Body>
      </Card>
      </div> 
      <div className='col-sm-3'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image3} height={300}/>
        <Card.Body>
          <button onClick={Handlethree}>vote</button>
        </Card.Body>
      </Card>
      </div>
      <div className='col-sm-3'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image4} height={300}/>
        <Card.Body>
          <button onClick={Handlefour}>vote</button>
        </Card.Body>
      </Card>
      </div>
      </div>
      <div className='sd'>
      {open &&
      <table className='sd'>
        <thead>
          <tr>
            <th>ID</th>
            <th>MOVIE NAME</th>
            <th>VOTE COUNT</th>
          </tr>
        </thead>
        
        <tbody>
          <tr>
          <td>1</td>
          <td>Ghilli</td>
          <td>{count1}</td>
          </tr>
          <tr>
          <td>2</td>
          <td>Maaveran</td>
          <td>{count2}</td>
          </tr>
          <tr>
          <td>3</td>
          <td>Chandramugi</td>
          <td>{count3}</td>
          </tr>
          <tr>
          <td>4</td>
          <td>PonniyanSelvan</td>
          <td>{count4}</td>
          </tr>
        </tbody>
      </table>}
      </div>
    </div>
  )
}
