import drawing1 from "../../image/drawing1.jpg"
import drawing2 from "../../image/drawing2.jpg"
import drawing3 from "../../image/drawing3.jpg"
import drawing4 from "../../image/drawing4.jpg"
import drawing5 from "../../image/drawing5.jpg"
import drawing6 from "../../image/drawing6.jpg"
import "../../css/style.css"
import {Pagination } from "react-bootstrap"
import {NavLink} from "react-router-dom"

export default function ArtShowcase(){
    //devide drawings into three parts and i,i+1,1+2
    return(
        <div className='bg-img'>
        <hr/>
            <h1 className="text-center"><strong>Art Gallary</strong></h1>
            <div className="container text-center">
                <div className="row artShowcaseRow">
                    <div className="col artShowcaseCol">
                        <img src={drawing1}></img>
                        <img src={drawing2}></img>
                    </div>
                    <div className="col artShowcaseCol">
                        <img src={drawing3}></img>
                        <img src={drawing4}></img>
                    </div>
                    <div className="col artShowcaseCol">
                        <img src={drawing5}></img>
                        <img src={drawing6}></img>
                    </div>
                </div>
            </div>
            <div className="text-center">
                    <NavLink to="/arts"><button type="button" className="btn btn-dark">..........Explore More..........</button></NavLink>
            </div>
            <hr/>
        </div>
    )
}

{/* <Pagination >
                        <Pagination.First />
                        <Pagination.Prev/>
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Ellipsis/>
                        <Pagination.Next/>
                        <Pagination.Last />
                    </Pagination> */}