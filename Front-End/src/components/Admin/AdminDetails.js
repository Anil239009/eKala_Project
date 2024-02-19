import React from 'react'
import AdminNavbar from './AdminNavbar'
import user from '../icons/team.png'
import pizza from '../icons/artlogo.png'
import payment from '../icons/wallet.png'
import delivery from '../icons/deliveryBoy.jpg'

function AdminDetails() {
  return (
    <>
        <AdminNavbar></AdminNavbar>

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
                  <a >User List</a>
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
                  <a >Art List</a>
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
                  <a >payment List</a>
                </div>
              </div>
            </div>
          </div>

          {/* second row */}
          <div className="row">

            {/* first col */}
            <div className="col-md-6 mt-2">
            <div className="card">
                <div className="card-body text-center">
                <div className="container">
                    <img src={delivery} style={{"maxWidth":"150px"}} className='img-fluid' alt="not found" />
                  </div>
                  <a >Delivery List</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Admin