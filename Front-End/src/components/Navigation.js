import React from 'react'
import{useState,useEffect} from 'react'
import '../App.css'
import { Link,NavLink } from 'react-router-dom'
export default function NavigationBar(){
    return (
        <div>
            {/* Navigation bar starts here */}
          <nav className="navbar navbar-expand-lg bg-body-tertiary cust-bg-col-5">
            <div className="container-fluid ">
                <NavLink className="text-light logo" to="/"><strong>eKala</strong></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link active mx-2 text-light" aria-current="page" to="">Home</NavLink>
                        <NavLink className="nav-link text-light" to="/gallery">All arts</NavLink>
                        {/* <NavLink className="nav-link text-light" to="/feedback">Feedback</NavLink> */}
                        <NavLink className="nav-link text-light" to="/login">SignIn</NavLink>
                        <NavLink className="nav-link text-light" to="/register">Registration</NavLink>
                        <NavLink className="nav-link text-light" to="/cart">Cart</NavLink>
                    </div>
                </div>
            </div>

            {/* search box starts from here... */}
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-light mx-2" type="submit">Search</button>
            </form>
            {/*search box ends here*/}
          
          </nav>
          {/* Navigation bar ends here  */}
        </div>
    )
}