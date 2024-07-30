

import React, { useEffect, useState } from "react";

function Timercount(){

const[counter ,setCounter]=useState(0);



  function incrementCounter() {
    
       setCounter(counter+1)
    };


  
 

  useEffect(()=>{

    const timeout = setTimeout(incrementCounter,1000);

    
    
  },[counter])


    return(
<>
  
<h1>Counter: {counter}</h1>
{/* <button onClick={incrementCounter}>Stop</button> */}

</>


    )

}
export default Timercount;






