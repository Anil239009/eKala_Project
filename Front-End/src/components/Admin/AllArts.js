import React,{useEffect,useState} from "react";
import "../../css/AllArts.css";
import ArtService from "../../Services/ArtService";
function AllArts() {
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
            <div className="container">
                <br></br>
                <div className="col-lg-12 md-12">
                    <h1 className="text-center mb-5" >Best Arts</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-3">
                {
                    Art.map(p=>
                    <div className="col mb-4">    
                    <div className="card" key={p.id}>
                    <img src={`./images/${p.artImagePath.split('/').pop()}`} className="card-img mx-auto d-block" alt="..." />
                    <div className="card-body">
                        <h4 className="card title text-center">{p.artName}</h4>
                        <p className="card-text">
                           {p.description}
                        </p>   
                    </div>
                    <div className="card-footer d-flex align-item-center justify-content-between">
                       <span className="price">₹{p.price}</span>
                       <button className="add_to_cart">Add To Cart</button> 
                    </div>
                    </div>
                    </div>)
                }
                </div>
            </div>
        
        </>
    );
}

export default AllArts;