

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

    const [{ playlists,user }, dispatch] = useStateValue();
    return (
        <div className="createPlaylist">
        <Header/>
        <Banner playlistName ="Create Playlist" playlistDescription={user?.display_name} playlistImg="images/create-playlist.JPG"/>
           
            
            <div className="createPlaylist_body">
                <div className="createPlaylist_grid">
                    {playlists?.items?.map(playlist=>{
                        return <SongCard audioname={playlist.name} img={playlist.images[0].url}/>    
                    })} 
                </div>
            </div>
            
        </div>
    )
}

export default CreatePlaylist
