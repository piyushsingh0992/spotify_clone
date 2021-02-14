import React from 'react';
import "./SideOption.css";

function SideOption({title,Icon}) {
    return (
        <div className="sideOption">
               
        {Icon && <Icon className="sideNavOption_icon" style={{ fontSize: "30px" }}  />}
        {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
        
    
}

export default SideOption
