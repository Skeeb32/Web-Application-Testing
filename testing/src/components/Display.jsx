import React from "react";


const Display = ({ strikes, balls }) => {


    return(
        <div> 
            <h1>AT BAT: </h1>
            <h2>Strikes : {strikes}</h2>
            <h2>Balls : {balls}</h2>
        </div>
    )
        
    
}

export default Display;