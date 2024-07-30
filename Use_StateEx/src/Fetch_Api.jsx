


import React, { useEffect,useState } from "react";

function Fetch_Api(){



    const[data,setData]=useState([]);

  async function fetchData(){

const response=await fetch('https://fakestoreapi.com/products')
const conversion=await response.json();
setData(conversion);

  }
  useEffect(()=>{


    fetchData();
  },[]);


  const HandleDelete=(id)=>{

setData(data.filter((ele)=>{
  return ele.id  != id ;
}))

  }
  return(

<>
{data.map((ele)=>(

    <div>
        {/* <p>{ele.id}</p> */}
        <p>{ele.title}</p>

        <button onClick={()=>HandleDelete(ele.id)}>Delete</button>
    </div>
))

}
</>
  )

}
export default Fetch_Api;


