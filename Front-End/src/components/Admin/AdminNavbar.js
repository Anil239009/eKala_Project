import React,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import './AdminNavbar.css'
function AdminNavbar() {
    const [menuOpen,setMenuOpen]=useState(false);
  return (
    <>
    <navbar>
    <Link to='/admin' className='title'>Home</Link>
    <div className="menu" onClick={()=>{
        setMenuOpen(!menuOpen)
    }}>
        <span></span>
        <span></span>
        <span></span>
    </div>
        <ul className={menuOpen?"open":""} id='active'>
            

            <li>
            <NavLink to='/arts' >Pizza</NavLink>
            </li>

            <li>
            <NavLink to='/users'  >Users</NavLink>
            </li>
            <li>
            <NavLink to='/payments' >Payments</NavLink>

            </li>
            <li>
            <NavLink to='/deliveries' >Deliveries</NavLink>

            </li>
        </ul>
        </navbar>
    </>
  )
}

export default AdminNavbar