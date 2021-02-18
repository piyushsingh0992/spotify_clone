import React from 'react';
import "./Home.css";
import Header from "./Header.js";
import SongCard from "./SongCard.js";
import { useStateValue } from "../StateProvider";

function Home() {
    const [{ spotify,usertoptracks,recentlyplayedtracks,featuredplaylists,newreleases }, dispatch] = useStateValue();

        spotify.getTrack("5I3Xih0C2ID3fqngBrBbGv").then((currentsong)=>{
            dispatch({
                type: "SET_CURRENT_SONG",
                currentsong: currentsong,
              });

        })

    return (

        
        <div className="home">
            <Header/>
            
            <div className="home_body">

            <h2>Your Top Tracks</h2>
            <div className="home_card_grid">{usertoptracks?.items.slice(0,5).map(track=>{
                return     <SongCard audioname={track.album.name} artistname={track.artists[0].name} img={track.album.images[0].url}/>
            })} </div>


            <h2>Recently Played</h2>
            <div className="home_card_grid">{recentlyplayedtracks?.items.slice(0,5).map(item=>{
                return <SongCard audioname={item.track.name} artistname={item.track.artists[0].name} img={item.track.album.images[0].url}/>
                    })} </div>


            <h2>Featured Playlist</h2>
            <div className="home_card_grid">{featuredplaylists?.playlists.items.slice(0,5).map(item=>{
                return <SongCard audioname={item.name}  img={item.images[0].url}/>
                })} </div>

            <h2>New Releases</h2>
            <div className="home_card_grid">    {newreleases?.albums.items.slice(0,5).map(item=>{


                return <SongCard audioname={item.name} artistname={item.artists[0].name} img={item.images[0].url}/>
                })} </div>
              
            
            </div>
            
        </div>
    )
}

export default Home;
