import React from 'react';
import "./SideNav.css";
import SideOption from "./SideOption.js";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import FavoriteIcon from '@material-ui/icons/Favorite';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';

import { useStateValue } from "../StateProvider";


function SideNav() {

    const [{ spotify ,playlists}, dispatch] = useStateValue();
    console.log('playlists ->',playlists)
    return (
        <div className="sideNav">
            <img src ="./images/spotify-logo-white.png"/>
            
            <SideOption  Icon={HomeIcon} title="Home" />
            <SideOption  Icon={SearchIcon} title="Search" />
            <SideOption  Icon={LibraryMusicIcon} title="Your Library" />
            <br/>
            <SideOption  Icon={FavoriteIcon} title="Create Playlist" />
            <SideOption  Icon={LibraryAddIcon} title="Liked Songs" />
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
