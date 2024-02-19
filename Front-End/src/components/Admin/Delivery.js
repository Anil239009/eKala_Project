import React, { useEffect, useState } from 'react'
import DeliveryService from '../../Services/DeliveryService'

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
        <h3 style={{"textAlign":"center"}}>Total no Arts delivered </h3>
<div className="row">
     <div className="col-md-4">
  {
     
     delivery.map(p=>
        <div className="card" key={p.id}>
            <div className="card-body">
            <ul style={{"listStyle":"none"}}>
                <li> <span style={{"color": "red","fontWeight": "bold"}}> Delivery Time: </span>  {p.deliveryTime}</li>
                <li> <span style={{"color": "red","fontWeight": "bold"}}> Delivery Status: </span> {p.deliveryStatus}</li>
                <li> <span style={{"color": "red","fontWeight": "bold"}}> User: </span> {p.payment.user.name}</li>
                <li> <span style={{"color": "red","fontWeight": "bold"}}>Ordered Items are: </span> </li>
            </ul>
            </div>
        </div>
     )
  }
    </div>
 </div>
  
  </div>
  </>
  )
}

export default Delivery