import React,{useState,useEffect} from "react";
import './App.css';
import LandingPage from "./landingPage/LandingPage.js";
import Player from "./player/Player.js";
import {getTokenFromResponse} from "./spotify.js";

import { useStateValue } from "./StateProvider";

import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();


function App() {
  // const [{ token,top_artists }, dispatch] = useStateValue();

  const [{ token,user,top_artists }, dispatch] = useStateValue();



  useEffect(()=>{
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash?.access_token;

    if(_token){
      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
    }
  }, [token, dispatch]);





  return (
    <div className="app">
    {token?<Player/>:<LandingPage spotify={spotify}/>}
    {/* <LandingPage/> */}
      
      
    </div>
  );
}

export default App;
