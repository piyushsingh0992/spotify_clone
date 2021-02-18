import React from 'react'
import "./SearchCard.css";
function SearchCard({classNumber,text}) {
    let color=['one','two','three','four','five','six']

    return (
        <div className={color[classNumber]}   >
        <h2>{text}</h2>
        </div>
    )
}

export default SearchCard
