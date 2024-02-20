import React, { useEffect, useState } from 'react';
// import PaymentService from '../../Services/PaymentService';
import UserService from '../../Services/UserService';
// import "../../css/card-body.css";
import "../../css/AllArts.css";


function Users() {

    const [users,setUser]=useState([]);

    const fetchData =()=>{
        UserService.getAllUser().then((result)=>{
            setUser([...result.data]);
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(() => {
      fetchData();
    }, [])
    
  return (
    <>
   
    <div className="container md-5">
    <div className="col-lg-12 md-12" >
        <h3 style={{"textAlign":"center"}}>List of All Users</h3>
    <div className="row" >
      <br></br>
      <div className="row  row-cols-md-5" >
      {
     
     users.map(p=>
        <div className="card" key={p.id}>
            <div className="card-body">
            <ul style={{"listStyle":"none"}} >
                <li> <span style={{"color": "red","fontWeight": "bold"}}> User: </span> {p.firstName} {p.lastName}</li>
                <li> <span style={{"color": "red","fontWeight": "bold"}}> Email: </span>  {p.email}</li>
                <li> <span style={{"color": "red","fontWeight": "bold"}}> Mobile: </span> {p.mobileNo}</li>
               
                
                {/* <li> <span style={{"color": "red","fontWeight": "bold"}}>Ordered Items are: </span> </li> */}
            </ul>
            </div>
         </div>
     )
  }
    </div>
 </div>
  
  </div>
  </div>
  
  </>
  )
}

export default Users;