import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Theme from './Theme'
// import Visibility from './Visibility'
// import Form_Handling from './Form_Handling'
// import Colorchanger from './Colorchanger'
// import Fetch_Api from './Fetch_Api'
// import Timercount from './Timercount'
// import Numberinput from './NumberInput'
// import Checkbox from './Checkbox'
import Ex1 from './Ex1'
import Display from './Display'
import { BrowserRouter } from "react-router-dom";
import { Routes,Route } from 'react-router-dom'
// import { useState } from 'react'

  
function App() {
  
  
  return (
    <>

    <BrowserRouter>
   
<Routes>
    <Route path="/" element={<Ex1 />} />
    <Route path="/display" element={<Display/>} />
    </Routes>
    </BrowserRouter>
{/* <Numberinput/> */}
{/* <Theme/> */}

{/* <Visibility/> */}
{/* <Colorchanger/> */}

 {/* <Form_Handling/>  */}
{/* <Fetch_Api/> */}
{/* <Timercount/> */}
{/* <Checkbox/> */}







      </>
  )
}

export default App
