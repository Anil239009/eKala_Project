import { NavLink } from "react-router-dom";
export default function UserBook(){
    const background={
        backgroundColor:'rgba(52, 58, 64,0.5)'
    }
    return(
        <div style={background}>
            <div className="container text-left">
                <div className="col col-9">
                    <h1 className="p-3"><strong>Support Amazing Artist by login</strong></h1>
                    <p className="p-3">Sign Up to follow your favourate artists and get personalized recomendation.</p>
                    <div className="p-3">
                        <NavLink to="/login"><button type="button" className="btn btn-success btn-lg">Sign Up</button></NavLink>{' '}
                        <NavLink ><button type="button" className="btn btn-outline-dark btn-lg">Learn More</button></NavLink>
                    </div>
                </div>
                <div className="col col-3"></div>
            </div>
        </div>
    )
}