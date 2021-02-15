import React from 'react';
import "./SideNav.css";
import SideOption from "./SideOption.js";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import FavoriteIcon from '@material-ui/icons/Favorite';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';

import { useStateValue } from "../StateProvider";

import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";


function SideNav() {

    const [{ spotify ,playlists}, dispatch] = useStateValue();
    console.log('playlists ->',playlists)
    return (
        <div className="sideNav">
            <img src ="./images/spotify-logo-white.png"/>

             <Link to="/"><SideOption  Icon={HomeIcon} title="Home" /></Link>
             <Link to="/search"><SideOption  Icon={SearchIcon} title="Search" /></Link>
             <Link to="/library"><SideOption  Icon={LibraryMusicIcon} title="Your Library" /></Link>
             <br/>
             <Link to="/createPlaylist"><SideOption  Icon={FavoriteIcon} title="Create Playlist" /></Link>
             <Link to="/likedsongs"><SideOption  Icon={LibraryAddIcon} title="Liked Songs" /></Link>     
            
            <br/>
            <h3>PLAYLISTS</h3>
            <hr/>
            {playlists?.items?.map((playlist) => (
            <h5 className="sideNav_playlist">{playlist.name}</h5> 
      ))}
        </div>
    )
}

export default SideNav
