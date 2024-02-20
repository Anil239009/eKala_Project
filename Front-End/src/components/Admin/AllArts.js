import React,{useEffect,useState} from "react";
import "../../css/AllArts.css";
import "../../css/card-body.css";
import { Link, NavLink } from 'react-router-dom'
import ArtService from "../../Services/ArtService";
import { AlertHeading } from "react-bootstrap";
function ArtArts() {
    const [Art,setart]=useState([]);
    const fetchData=()=>{
        ArtService.getAllArt().then((result)=>{
            setart([...result.data]);
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        fetchData();
    },[])

    return(
        <>
            {/* <Link to='/artList'></Link> */}
            <div className="container">
                <br></br>
                <div className="col-lg-12 md-12" >
                    <h2>Find your best Art here</h2>
                </div>
                <br></br>
                <div className="row row-cols-1 row-cols-md-3">
                {
                    Art.map(p=>
                        <div className="card" key={p.id}>
                        <div class="card" className="align-item-center justify-content-between" >
                        <img className="img" src={`./images/${p.artImagePath.split('/').pop()}`}  alt="..." />
                        <h4 className="align-item-center justify-content-between">{p.artName}</h4>
                        <p class="price">₹{p.price}</p>
                        <p> {p.description}</p>
                        <p><button className="btn-primary">Add to Cart</button></p>
                        </div>
                      </div>
                    // <div className="col mb-4">    
                    // <div className="card" key={p.id}>
                    // <img src={`./images/${p.artImagePath.split('/').pop()}`} className="card-img mx-auto d-block" alt="..." />
                    // <div className="card-body">
                    //     <h5 className="align-item-center justify-content-between">
                    //     {p.artName}</h5>
                    //     <p >
                    //        {p.description}
                    //     </p> 
                    //    <span className="price">₹{p.price}</span>
                    // </div>
                    // </div>
                    // </div>

 
                    
  )
                }
                </div>
            </div>
        
        </>
    );
}

export default ArtArts;