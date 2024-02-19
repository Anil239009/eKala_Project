import React from 'react'
import ArtistBook from './ArtistBook'
import UserBook from './UserBook'
import ArtShowcase from './ArtShowcase'

export default function HeadingAbout(){
    return(
        <div>        
            <div>
                <ArtistBook></ArtistBook>
                <UserBook></UserBook>
                <ArtShowcase></ArtShowcase>
                <p>About this page will be here.</p>
            </div>
        </div>

    )
}