import { NavLink } from "react-router-dom";

export default function ArtGallery(){
    return(
        <div>
            <h1>here all arts will be shown </h1>
            <NavLink to="/"><button type="button" className="btn btn-success">go to home</button></NavLink>
        </div>
    )
}