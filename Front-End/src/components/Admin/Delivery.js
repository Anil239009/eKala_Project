import React, { useEffect, useState } from 'react';
import DeliveryService from "../../Services/DeliveryService";
// import "../../css/card-body.css";
import "../../css/AllArts.css";

function Delivery() {

    const [delivery,setdelivery]=useState([]);

    const fetchData =()=>{
        DeliveryService.getAllDelivery().then((result)=>{
            setdelivery([...result.data]);
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(() => {
      fetchData();
    }, [])
    
  return (
    <>
    
    <div className="container mt-5">
    <div className="col-lg-12 md-12" >
        <h3 style={{"textAlign":"center"}}>List of Delivered Arts</h3>
    <div className="row">
      <br></br>
      <div className="row row-cols-1 row-cols-md-3">
      {
     
      delivery.map(p=>
        <div className="card" key={p.id}>
            <div className="card-body">
            <ul style={{"listStyle":"none"}} >
                <li> <span style={{"color": "red","fontWeight": "bold"}}> Delivery Time: </span>  {p.deliveryDate}</li>
                <li> <span style={{"color": "red","fontWeight": "bold"}}> User: </span> {p.payment.user.firstName} {p.payment.user.lastName}</li>
                <li> <span style={{"color": "red","fontWeight": "bold"}}> Mobile: </span> {p.payment.user.mobileNo}</li>
                <li> <span style={{"color": "red","fontWeight": "bold"}}> payment Status: </span> {p.payment.paymentStatus}</li>
                <li> <span style={{"color": "red","fontWeight": "bold"}}> Delivery Status: </span> {p.deliveryStatus}</li>
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

export default Delivery;