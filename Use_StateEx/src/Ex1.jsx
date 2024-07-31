
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Ex1(){


let[name,setName]=useState(" ");
let  navigate=useNavigate();

const handlechangeName = (e) => {
    setName(e.target.value);
  };


 function   handleSubmit()
   {
//    navigate("/display");

 navigate("/display",{state:{message:name}});
   }

   

    return(
        <>
{/* /         <lable>Name:</lable> */}
         <input type="text" value={name} onChange={(e)=>handlechangeName(e)} />
        
         <button onClick={()=>handleSubmit()}>Submit</button>
        
        </>
    )
}
export default Ex1;