import React, { useEffect, useState } from 'react';
import PaymentService from '../../Services/PaymentService';
// import "../../css/card-body.css";
import "../../css/AllArts.css";

function Payment() {

    const [payments,setpayment]=useState([]);

    const fetchData =()=>{
        PaymentService.getAllPayment().then((result)=>{
            setpayment([...result.data]);
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
        <h3 style={{"textAlign":"center"}}>List of Payment Recived and Pending</h3>
    <div className="row">
      <br></br>
      <div className="row row-cols-1 row-cols-md-3">
      {
     
      payments.map(p=>
        <div className="card" key={p.id}>
            <div className="card-body">
            <ul style={{"listStyle":"none"}} >
                {/* <li> <span style={{"color": "red","fontWeight": "bold"}}> User: </span> {p.payment.user.firstName} {p.payment.user.lastName}</li> */}
                <li> <span style={{"color": "red","fontWeight": "bold"}}> Payment Date: </span>  {p.paymentDate}</li>
                <li> <span style={{"color": "red","fontWeight": "bold"}}> description: </span> {p.paymentDescription}</li>
                <li> <span style={{"color": "red","fontWeight": "bold"}}> Amount: </span> {p.amount}</li>
                <li> <span style={{"color": "red","fontWeight": "bold"}}> payment Status: </span> {p.paymentStatus}</li>
                
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

export default Payment;