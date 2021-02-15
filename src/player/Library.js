

import React from 'react';
import "./Library.css";
import SongCard from "./SongCard.js" ;
import Header from "./Header.js";


function Library() {
    return (
        <div className="library">
        <Header/>
        <div className="library_grid_first_row">
            <div className="library_firstrow_banner">
                <div>
                <h1>Liked Songs</h1>
                <h4>0 liked songs</h4>
                </div>
            </div>
           <SongCard/>
           <SongCard/>
           <SongCard/>
        </div>

        <div className="library_grid">
           <SongCard/>
           <SongCard/>
           <SongCard/>
           <SongCard/>
           <SongCard/>
        </div>
        </div>
    )
}

export default Library
