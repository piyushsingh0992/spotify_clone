

import React from 'react'
import "./CreatePlaylist.css";

import Header from "./Header.js";
import Banner from "./Banner.js";
import SongRow from "./SongRow.js";
import { useStateValue } from "../StateProvider";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongCard from "./SongCard.js";


function CreatePlaylist() {
    return (
        <div className="createPlaylist">
        <Header/>
            <Banner/>
            <div className="createPlaylist_body">
            <div className="createPlaylist_grid">
            
            <SongCard/>
            <SongCard/>
            <SongCard/>
            <SongCard/>
            <SongCard/> 
            </div>
            </div>
            
        </div>
    )
}

export default CreatePlaylist
