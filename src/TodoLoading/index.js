import React, { Fragment } from "react";




const TodoLoadingSkeleton = () => {
    return (
        
        <ul>
            <li style={{ 
                width: "600px",
                padding: "10px",
                background: "gray",
                color: "gray",
                // animation-duration: "2s",
                animationDuration: "1s",
                animationFillMode: "forwards"
                }}>pppppppppppp</li>

            <li style={{ 
                width: "600px",
                padding: "10px",
                background: "gray",
                color: "gray"
                }}>pppppppppppp</li>

            <li style={{ 
                width: "600px",
                padding: "10px",
                background: "gray",
                color: "gray"
                }}>pppppppppppp</li>   
        </ul>       
    )
}



export { TodoLoadingSkeleton }