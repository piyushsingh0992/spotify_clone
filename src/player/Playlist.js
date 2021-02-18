import React,{useState} from 'react';
import "./Playlist.css";
import Header from "./Header.js";
import Banner from "./Banner.js";
import SongRow from "./SongRow.js";
import { useStateValue } from "../StateProvider";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

function Playlist() {



    const [{ spotify ,user,currentplaylist}, dispatch] = useStateValue();
    let[playlistName,playlistNameSetter]=useState('');
    let[playlistDescription,playlistDescriptionSetter]=useState('');
    let[playlistImg,playlistImgSetter]=useState(null);
    let[playlistSongList,playlistImgSongListSetter]=useState([]);
    

    spotify.getPlaylist(currentplaylist).then(playlist=>{
       
        playlistNameSetter(playlist.name);
        playlistDescriptionSetter(playlist.description);
        playlistImgSetter(playlist.images[0].url);
    })

    spotify.getPlaylistTracks(currentplaylist).then(tracks=>{
        playlistImgSongListSetter(tracks.items)
    })


    console.log("playlistSongList[0].track.album.name -> ",playlistSongList[0]?.track.album.name)
    console.log("playlistSongList[0].track.duration_ms -> ",playlistSongList[0]?.track.duration_ms)
    return (
        <div className="playlist">
            <Header/>
            <Banner playlistName={playlistName} playlistDescription={playlistDescription} playlistImg={playlistImg}/>
            <div className="playlist_body">
            <div className="playlist_icons"><PlayCircleFilledIcon style={{fontSize:"70px",color:"#1db954"}}/> <FavoriteIcon style={{fontSize:"40px",color:"#1db954"}} />
            
            <MoreHorizIcon style={{fontSize:"30px",color:"white"}}/></div>
            <div className="playlist_songlist">
                <div className="songRow">
                    <div className="songRow_left">
                        <p>1 &nbsp;</p>    
                        <p>Title</p> 
                    </div>
                    <div className="songRow_center">
                        <p>Album Name</p>
                    </div>
                    <div className="songRow_right">
                        <AccessTimeIcon style={{    fontSize:"25px", color:"grey"}}/>
                    </div>
                </div>

            <hr/>
            <br/>
            {playlistSongList.map((song,index)=>{
                return <SongRow index={index} audioName={song.track.name} artistName={song.track.artists[0].name}
                    audioImg={song.track.album.images[0].url}
                />
            })}

            </div>
            </div>
        </div>
    )
}

export default Playlist
