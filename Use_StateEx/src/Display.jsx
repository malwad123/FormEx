import React from "react";
import { useLocation } from "react-router-dom";

function Display(){

 let location=useLocation();

    return(
        <>
        
        {/* <h1>hiiii</h1> */}
        {/* hello ... */}
        
        <h1>{location.state.message}</h1>
        
        </>
    )
}

export default Display;