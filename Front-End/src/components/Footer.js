import React from 'react'
export default function Footer(){
    return(
        <div className="row px-4 py-4 cust-bg-col-5">
            <div className="col-sm-5 mb-3 mb-sm-0">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Website Name Here</h5>
                        <p className="card-text">Some description about the page will be here.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-2 mb-3 mb-sm-0">
                {/* <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div> */}
                <img src="../img/footer_bg.png" className='footer=-img' alt='footer image here'></img>
            </div>
            <div className="col-sm-5">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Contact with us</h5>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Enter Email" aria-label="Search"/>
                            <button className="btn btn-outline-dark mx-2" type="submit">Subscribe</button>
                        </form>
                        <p className="card-text"></p>
                        {/* <Link to="/" className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}