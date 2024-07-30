


import React, { useState } from "react";

function Colorchanger(){


    const[background, setBackground]=useState();
    const[colortext,setColortext]=useState();




    handleBackground=(e)=>{


        setBackground(e.target.value)


    }

    handleColortext=(e)=>{
      
        setColortext(e.target.value)

    }


    return(
<>

<div style={{background:background,color:colortext,padding:"20px"}}>

<lable>Background Color:</lable>
<input type="color"
value={background}
onChange={handleBackground}
/>
</div>
<div>
<lable>Text Color:</lable>
<input type="color"
value={colortext}
onChange={handleColortext}
/>
</div>



<div>

<h2>Color Changer</h2>
        <p>Use the input fields above to change the background and text colors dynamically.</p>
      </div>


</>

    )
};
export default Colorchanger;