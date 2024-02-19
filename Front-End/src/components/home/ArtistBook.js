import art1 from "../../image/art1.png"
import { NavLink } from "react-router-dom"
export default function ArtistBook(){
    const imageStyle={
        height:'42em',
        width:'28em',
        borderRadius:'30px',
        padding:'8px'
    }
    return(
        <div className='bg-img'>
            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col col-7">
                        <h1 className="p-3"><strong>Discover the beauty of artist expression</strong></h1>
                        <p className="p-2">Immagine yourself in the world of creativity and inspiration,where artists showcase their unique talents and visions.</p>
                        <div className="p-2">
                            <button type="button" className="btn btn-dark p-2.5 btn-lg">Explore</button> {' '}
                            <NavLink to="/login">
                                <button type="button" className="btn btn-success p-2.5 btn-lg">Join as an Artist</button>
                            </NavLink>
                        </div>
                    </div>
                    <div className="col col-5 p-6 m-4">
                        <img src={art1} style={imageStyle} />
                    </div>
                </div>
            </div>
        </div>
    )
}