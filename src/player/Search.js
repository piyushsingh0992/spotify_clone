import React from 'react';
import "./Search.css";
import Header from "./Header.js";
import SearchCard from "./SearchCard.js";

function Search() {
    return (
        <div className="search">
        <Header/>
        <h1>Browse All</h1>
        <div className="search_grid">
        
        <SearchCard classNumber="1" text="Podcasts"/>
        <SearchCard classNumber="3" text="Made For You"/>
        <SearchCard classNumber="1" text="New Releases"/>
        <SearchCard classNumber="2" text="Charts"/>
        <SearchCard classNumber="4" text="Discover"/>

        <SearchCard classNumber="0" text="Concert's "/>
        <SearchCard classNumber="2" text="Bollywood"/>
        <SearchCard classNumber="5" text="Punjabi"/>
        <SearchCard classNumber="3" text="Tamil"/>
        <SearchCard classNumber="0" text="Telgu"/>
        

        <SearchCard classNumber="2" text="Indie"/>
        <SearchCard classNumber="4" text="Classic"/>
        <SearchCard classNumber="5" text="K-pop"/>
        <SearchCard classNumber="0" text="Party"/>
        <SearchCard classNumber="1" text="Instrumental"/>

        <SearchCard classNumber="0" text="Romance"/>
        <SearchCard classNumber="1" text="Devotion"/>
        <SearchCard classNumber="4" text="Travel"/>
        <SearchCard classNumber="2" text="Metal"/>
        <SearchCard classNumber="5" text="Blues"/>
                

        </div>
        
            
        </div>
    )
}

export default Search
