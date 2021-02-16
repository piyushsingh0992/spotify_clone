

import React from 'react';
import "./Library.css";
import SongCard from "./SongCard.js" ;
import Header from "./Header.js";
import { useStateValue } from "../StateProvider";

function Library() {

    const [{ usertoptracks ,newreleases,featuredplaylists}, dispatch] = useStateValue();

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
            {usertoptracks?.items.slice(0,3).map(track=>{
                return  <SongCard audioname={track.album.name} artistname={track.artists[0].names} img={track.album.images[0].url}/>
            })}
        </div>

        <div className="library_grid">
        {newreleases?.albums.items.slice(0,5).map(item=>{
            return <SongCard audioname={item.name} artistname={item.artists[0].name} img={item.images[0].url}/>
            })}
        </div>

        <div className="library_grid">
        {featuredplaylists?.playlists.items.slice(0,5).map(item=>{
            return <SongCard audioname={item.name}  img={item.images[0].url}/>
            })}
        </div>

        </div>
    )
}

export default Library
