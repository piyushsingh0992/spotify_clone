import React from 'react';


function SideOption({title,Icon}) {
    return (
        <div className="sideOption">
               
        {Icon && <Icon className="sideNavOption_icon" style={{ fontSize: "2vw" }}  />}
        {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
        
    
}

export default SideOption
