import React,{useState,useEffect} from "react";
import './App.css';
import LandingPage from "./landingPage/LandingPage.js";
import Player from "./player/Player.js";
import {getTokenFromResponse} from "./spotify.js";

import { useStateValue } from "./StateProvider";

import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();


function App() {
  const [{ token,user,newtracks}, dispatch] = useStateValue();



  useEffect(()=>{
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash?.access_token;

    if(_token){
      //general
      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });});

      dispatch({
          type: "SET_SPOTIFY",
          spotify: spotify,
        });

      // sidenav bar  
      spotify.getUserPlaylists().then((playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists,
          });
        });

      //home
      spotify.getMyTopArtists().then((usertopartists)=>{
        dispatch({
          type: "SET_USER_TOP_ARTISTS",
          usertopartists:usertopartists,
        });
      })

      spotify.getMyTopTracks().then((usertoptracks)=>{
        dispatch({
          type: "SET_USER_TOP_TRACKS",
          usertoptracks:usertoptracks,
        });
      })


      spotify.getMyRecentlyPlayedTracks().then((recentlyplayedtracks)=>{
        dispatch({
          type: "SET_RECENTLY_PLAYED_TRACKS",
          recentlyplayedtracks:recentlyplayedtracks,
        });
      })

      spotify.getFeaturedPlaylists().then((featuredplaylists)=>{
        dispatch({
          type: "SET_FEATURED_PLAYLISTS",
          featuredplaylists:featuredplaylists,
        });

      })

      spotify.getNewReleases().then((newreleases)=>{
        dispatch({
          type: "SET_NEW_RELEASES",
          newreleases:newreleases,
        });

      })
    }
  }, [token, dispatch]);

  return (
    <div className="app">
    {token?<Player/>:<LandingPage spotify={spotify}/>}
    </div>
  );
}

export default App;
