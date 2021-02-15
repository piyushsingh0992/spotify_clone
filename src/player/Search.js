import React from 'react';
import "./Search.css";
import Header from "./Header.js";
import SearchCard from "./SearchCard.js";

function Search() {
    return (
        <div className="search">
        <Header/>
        <h1>Browse All</h1>
        <div className="search_grid"><SearchCard/><SearchCard/><SearchCard/><SearchCard/><SearchCard/><SearchCard/><SearchCard/><SearchCard/><SearchCard/><SearchCard/><SearchCard/><SearchCard/><SearchCard/><SearchCard/><SearchCard/><SearchCard/><SearchCard/><SearchCard/><SearchCard/></div>
        
            
        </div>
    )
}

export default Search
