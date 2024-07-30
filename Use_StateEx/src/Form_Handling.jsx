//Question 3: Form Handling
//Create a form with input fields for a user's name and email. Use useState to manage the form state,
//and display the entered information below the form as the user types.

import React, { useState } from "react";

function Form_Handling() {
  let [name, setName] = useState();
  let [email, setEmail] = useState();
  const [submited, setSubmited] = useState("")

//   const handlechangeEmail = (e) => {
//     setEmail(e.target.value);
//   };
  const handlechangeName = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    setSubmited(name,email)
  };

  return (
    <>
      <div>
        <lable>Email:</lable>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
        

        <lable>Name:</lable>
        <input type="text" value={name} onChange={(handlechangeName)} />

        <button onClick={handleSubmit}>Submit</button>
      </div>
{/* 
    // this div for display the data without submit button and submit function */}
      {/* <div>
        <h2>informatiom </h2>
        <p>Email:{email}</p>

        <p>Name:{name}</p>
      </div> */}

      {submited && (
        <div>
            <p>{name}</p>
            {email}
        </div>
      )}
    </>
  );
}
export default Form_Handling;
