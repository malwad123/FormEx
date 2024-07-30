

import React, { useState } from "react";

function Checkbox(){


    const [showName, setShowName] = useState(false);
    const [name, setName] = useState('');
    
   



  let  handlechangeName=(e)=>
    {
setName(e.target.value);

    }

    let handleCheckbox=()=>
    {

        if (showName) {
            setShowName(false);
          } else {
            setShowName(true);
          }
        }



    return(

        <>
        <lable>Name:</lable>
        <input type="text" value={name} onChange={(handlechangeName)} />


       
         <input type="checkbox" checked={showName} onChange={handleCheckbox} />
       {showName && <p>{name}</p>} 
    </>


        
    )
}
export default Checkbox;