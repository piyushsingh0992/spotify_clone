import React from 'react';
import "./Home.css";
import Header from "./Header.js";
import SongCard from "./SongCard.js";

function Home() {
    return (
        <div className="home">
            <Header/>
            
            <div className="home_body">
            <h2>heyeea</h2>
            <div className="home_card_grid"><SongCard/><SongCard/><SongCard/><SongCard/><SongCard/> </div>

            <h2>heyeea</h2>
            <div className="home_card_grid"><SongCard/><SongCard/><SongCard/><SongCard/><SongCard/> </div>

            <h2>heyeea</h2>
            <div className="home_card_grid"><SongCard/><SongCard/><SongCard/><SongCard/><SongCard/> </div>

            <h2>heyeea</h2>
            <div className="home_card_grid"><SongCard/><SongCard/><SongCard/><SongCard/><SongCard/> </div>
              
            
            </div>
            
        </div>
    )
}

export default Home;
