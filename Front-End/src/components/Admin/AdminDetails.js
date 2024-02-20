import React from 'react'

import { Link, NavLink } from 'react-router-dom'
import user from '../icons/team.png'
import pizza from '../icons/artlogo.png'
import payment from '../icons/wallet.png'
import delivery from '../icons/deliveryBoy.jpg'

function AdminDetails() {
  return (
    <>
    <h3>Admin</h3>
        <Link to='/admin' className='title'></Link>
        <div className="container">
          {/* first row */}
          <div className="row mt-3">

            {/* first col */}
            <div className="col-md-4 mt-2">
              <div className="card">
                <div className="card-body text-center">
                  <div className="container">
                    <img style={{"maxWidth":"150px"}} src={user} className='img-fluid' alt="not found" />
                  </div>
                  <NavLink to='/users' ><h2>List of Users</h2></NavLink>  
                </div>
              </div>
            </div>

            {/* second col */}
            <div className="col-md-4 mt-2">
            <div className="card">
                <div className="card-body text-center">
                <div className="container">
                    <img src={pizza} style={{"maxWidth":"150px"}}  className='img-fluid' alt="not found" />
                  </div>
                  <NavLink to='/artList' ><h2>List of Arts</h2></NavLink>  
                </div>
              </div>
            </div>

            {/* third col */}
            <div className="col-md-4 mt-2">
            <div className="card">
                <div className="card-body text-center">
                <div className="container">
                    <img src={payment} style={{"maxWidth":"150px"}} className='img-fluid' alt="not found" />
                  </div>
                  <NavLink to='/payments' ><h2>List of Payments</h2></NavLink>  
                </div>
              </div>
            </div>
          </div>

          {/* second row */}
          <div className="row">

            {/* first col */}
            <div className="col-md-4 mt-3">
            <div className="card">
                <div className="card-body text-center">
                <div className="container">
                    <img src={delivery} style={{"maxWidth":"150px"}} className='img-fluid' alt="not found" />
                  </div>
                  <NavLink to='/delivery' ><h2>List of Deliveries</h2></NavLink>  
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default AdminDetails;