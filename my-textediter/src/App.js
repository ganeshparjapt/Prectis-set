// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Form from './compontes/Form';
import Navbar from './compontes/Navbar';

function App() {
  const [change, setchange] = useState("light");
  const toggle = ()=>{
    if(change === "light")
 {  
   setchange("dark")  
   document.body.style.backgroundColor= "black";
   console.log("toggle mode clicked on click if condcito")
  }
   else{
    setchange("light")
    document.body.style.backgroundColor= "white";
    console.log("toggle else part run")

   }

  }
  return (
  <div >
  <Navbar title={"TextEdit"} toggle={toggle} change={change}/>
  <Form change={change}/>
  </div>
  );
}

export default App;
