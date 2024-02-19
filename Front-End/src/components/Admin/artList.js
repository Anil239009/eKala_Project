import React,{useEffect,useState} from "react";
import "../../css/AllArts.css";
import "../../css/card-body.css";
import { Link, NavLink } from 'react-router-dom'
import ArtService from "../../Services/ArtService";
function ArtList() {
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
                    <div></div>
                    <div> <p ><button className="btn-success">Add new Art here</button></p></div>
                    <div></div>
               
                </div>
                <br></br>
                <div className="row row-cols-1 row-cols-md-3">
                {
                    Art.map(p=>
                        <div className="card" key={p.id}>
                        <div class="card" className="align-item-center justify-content-between" >
                        <img className="img" src={`./images/${p.artImagePath.split('/').pop()}`}  alt="..." />
                        <h4 className="align-item-center justify-content-between">T{p.artName}</h4>
                        <p class="price">₹{p.price}</p>
                        <p> {p.description}</p>
                        <div><button className="btn-success"><NavLink to='/UpdateArt'>Update</NavLink ></button>
                        <button className="btn-danger">Delete</button>
                        </div>
                        </div>
                      </div>        
  )
                }
                </div>
            </div>
        
        </>
    );
}

export default ArtList;