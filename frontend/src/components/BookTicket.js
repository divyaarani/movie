import React, { useState } from 'react'
export default function BookTickets() {
    const[count,setCount]=useState(0)
    const handleClick=()=>{
        setCount(count+1)
    }
    return (
        <div className='movie-containers'>
            <h1>Select a movie:</h1>
            <select id="movie">
                <option>Ghilli</option>
                <option>Maaveran</option>
                <option>Chandramugi</option>
                <option>PonniyanSelvan</option>
            </select>
            {/* <ul className='showcase'>
                <li  className='seat'>Available </li>
                <li className='seatselected'>Booked</li>
                <li className='seatsold'>Selected</li>
            </ul> */}
            <div className='cc'>
              <div><button className='avail'></button>Available</div>
              <div><button className='bd'></button>Booked</div>
              <div><button className='sel'></button>Select</div>
            </div>
            <div className='container-book'>
            <div className='rows'>
                <p>A</p>
                <button className='seat' onClick={handleClick}></button>
                <button className='seatselected' onClick={handleClick}></button>
                <button className='seat' onClick={handleClick}></button>
                <button className='seatsold' onClick={handleClick}></button>
                <button className='seatsold' onClick={handleClick}></button>
                <button className='seat' onClick={handleClick}></button>
                <button className='seatselected' onClick={handleClick}></button>
                <button className='seat' onClick={handleClick}></button>
                <p>B</p>
                <button className='seat' onClick={handleClick}></button>
                <button className='seat' onClick={handleClick}></button>
                <button className='seatsold' onClick={handleClick}></button>
                <button className='seat' onClick={handleClick}></button>
                <button className='seatsold' onClick={handleClick}></button>
                <button className='seat' onClick={handleClick}></button>
                <button className='seatselected'onClick={handleClick}></button>
                <button className='seat'onClick={handleClick}></button>
                <p>C</p>
                <button className='seat' onClick={handleClick}></button>
                <button className='seat' onClick={handleClick}></button>
                <button className='seatsold' onClick={handleClick}></button>
                <button className='seat' onClick={handleClick}></button>
                <button className='seat' onClick={handleClick}></button>
                <button className='seatsold' onClick={handleClick}></button>
                <button className='seatselected' onClick={handleClick}></button>
                <button className='seat' onClick={handleClick}></button>
                <p>D</p>
                <button className='seat' onClick={handleClick}></button>
                <button className='seat' onClick={handleClick}></button>
                <button className='seatselected' onClick={handleClick}></button>
                <button className='seatsold' onClick={handleClick}></button>
                <button className='seatsold' onClick={handleClick}></button>
                <button className='seat' onClick={handleClick}></button>
                <button className='seat' onClick={handleClick}></button>
                <button className='seatselected' onClick={handleClick}></button>
                <p>E</p>
                <button className='seatsold' onClick={handleClick}></button>
                <button className='seatsold' onClick={handleClick}></button>
                <button className='seat' onClick={handleClick}></button>
                <button className='seat' onClick={handleClick}></button>
                <button className='seat' onClick={handleClick}></button>
                <button className='seat' onClick={handleClick}></button>
                <button className='seatselected' onClick={handleClick}></button>
                <button className='seat' onClick={handleClick}></button>
                <p>F</p>
                <button className='seatselected' onClick={handleClick}></button>
                <button className='seatsold' onClick={handleClick}></button>
                <button className='seatsold' onClick={handleClick}></button>
                <button className='seatselected' onClick={handleClick}></button>
                <button className='seat' onClick={handleClick}></button>
                <button className='seat' onClick={handleClick}></button>
                <button className='seat' onClick={handleClick}></button>
                <button className='seatselected'onClick={handleClick}></button>
            </div>
        </div>
        <h1>Seat Selected {count}</h1>
        <button> pay Rs.{count*200}</button>
        </div> 
    )
}