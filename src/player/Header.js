import React from 'react';
import "./Header.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useStateValue } from "../StateProvider";

function Header() {
    const [{ spotify ,user}, dispatch] = useStateValue();

    return (
        <div className="header">
            <div className="header_left">
            <SearchIcon />
            <input
                placeholder="Search for Artists, Songs, or Podcasts "
                type="text"
            />
            </div>
            <div className="header_right">
            <Avatar  className="header_right_icon" style={{ fontSize: "20px" }}  alt={user?.display_name} src={user?.images[0]?.url}/>
            <h3>{user?.display_name}</h3>
            </div> 
        </div>
    )
}

export default Header
