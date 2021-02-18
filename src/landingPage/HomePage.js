import React from 'react';
import "./HomePage.css";
import { accessUrl } from "../spotify";


function HomePage() {
    return (
        <div className="homepage">
            <div className="homepage_hero">
                <div>
                <h1>Go Premium. Be happy.</h1>
                <a href={ accessUrl }>START FREE TRIAL</a>
                </div>
            </div>

            
            <div className="homepage_webplayer">
                <h1>Looking for music?</h1>
                <p>Start listening to the best new releases.</p>
                <a href={ accessUrl }>LAUNCH WEB PLAYER</a>

                <div className="homepage_webplayer_musicgrid">
                    <a href={ accessUrl } className="homepage_webplayer_song">
                        <div className="homepage_webplayer_song_front">
                        <img src="images/1.jpg"/>
                        </div>
                        <div className="homepage_webplayer_song_back">
                        
                        <h2>Play Now</h2>
                        </div>
                    </a>

                    <a href={ accessUrl } className="homepage_webplayer_song">
                        <div className="homepage_webplayer_song_front">
                        <img src="images/download (1).jpg"/>
                        </div>
                        <div className="homepage_webplayer_song_back">
                        
                        <h2>Play Now</h2>
                        </div>
                    </a><a href={ accessUrl } className="homepage_webplayer_song">
                        <div className="homepage_webplayer_song_front">
                        <img src="images/3.jpg"/>
                        </div>
                        <div className="homepage_webplayer_song_back">
                        
                        <h2>Play Now</h2>
                        </div>
                    </a><a href={ accessUrl } className="homepage_webplayer_song">
                        <div className="homepage_webplayer_song_front">
                        <img src="images/4.jpg"/>
                        </div>
                        <div className="homepage_webplayer_song_back">
                        
                        <h2>Play Now</h2>
                        </div>
                    </a><a href={ accessUrl } className="homepage_webplayer_song">
                        <div className="homepage_webplayer_song_front">
                        <img src="images/5.jpg"/>
                        </div>
                        <div className="homepage_webplayer_song_back">
                        
                        <h2>Play Now</h2>
                        </div>
                    </a><a href={ accessUrl } className="homepage_webplayer_song">
                        <div className="homepage_webplayer_song_front">
                        <img src="images/download.jpg"/>
                        </div>
                        <div className="homepage_webplayer_song_back">
                        <h2>Play Now</h2>
                        </div>
                    </a>


                </div>
            </div>

        </div>
    )
}

export default HomePage
