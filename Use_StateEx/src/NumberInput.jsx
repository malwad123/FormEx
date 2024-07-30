import React, { useState } from "react";

function NumberInput(){

 let [number,setNumber]=useState([1,3,4,5])
let[input,setInput]=useState('')


const handleInput=(e)=>{

setInput(e.target.value)
}
function handleSubmit(){

let num=Number(input)
if(num>=1 && num<=99 && !number.includes(num)){

let newNumber=[...number,num].sort((a,b)=>a-b)
setNumber(newNumber)
console.log(newNumber);
}







}



return(
<>
<h1>{number}



</h1>
<input type="number"value={input}
onChange={handleInput}
placeholder="enter a lucky number"
/>

<button onClick={handleSubmit}>Add Number</button>





</>

)

}
export default NumberInput;
