//Question 2: Toggle Visibility
//Create a component that has a button to toggle the visibility of a paragraph. When the button is clicked,
// the paragraph should either be shown or hidden.


import React, { useState } from "react";


function Visibility(){


    let[isVisible,setIsVisible]=useState(true);

    function togglePage(){


setIsVisible(!isVisible)

    }


return(
<>
<div>
    <button onClick={()=>togglePage()} >{isVisible ? "hide" :"show" } 
        paragraph</button>

         {isVisible &&(
            <p>this is paragraph that can be toggled on or off</p>
        )} 
        
                     {!isVisible &&(
                        <p>this is for hide </p>
                    )} 


        








</div>



</>


)

}
export default Visibility;