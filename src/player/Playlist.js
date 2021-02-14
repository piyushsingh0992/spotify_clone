import React from 'react';
import "./Playlist.css";
import Header from "./Header.js";
import Banner from "./Banner.js";
import SongRow from "./SongRow.js";
import { useStateValue } from "../StateProvider";


function Playlist() {

    const [{ spotify ,user}, dispatch] = useStateValue();

    
    return (
        <div className="playlist">
             <Header/>
            <Banner/>
            <SongRow/>
            <SongRow/>
            <SongRow/>
            <SongRow/>
            <SongRow/>
            
        </div>
    )
}

export default Playlist
