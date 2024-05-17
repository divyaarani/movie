import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './Images/logo1.png';
import { useAuth } from './Auth';

export default function NavBar() {
  const auth=useAuth()
  return (
    <nav className='header-nav'>
        <div>
           <img src={logo} alt='logo' width={100}/>
        </div>
        <div>
            <input id='inp-nav'/>
            <button id='btn-nav'>Search</button>
        </div>
        <div className='nav-btn'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/AboutUs'>AboutUs</NavLink>
            <NavLink to='/BookTickets'>Book Tickets</NavLink>
            <NavLink to='/Contest'>Contest</NavLink>
            {auth.user && <NavLink to='/'>User</NavLink>}
            <NavLink to='/Profile'>Profile</NavLink>
            <NavLink to='/vote'>Votings</NavLink>
        </div>
        {!auth.user && <NavLink to='/login'>Login</NavLink>}
        {!auth.user && <NavLink to='/signUp'>SignUp</NavLink>}
    </nav>
  )
}
