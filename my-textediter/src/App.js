// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Form from './compontes/Form';
import Navbar from './compontes/Navbar';

function App() {
  const [change, setchange] = useState("light");
  const toggle = (cls)=>{
    removeclass();
    let csl = cls
    if(change === "light")
 {  
   setchange("black")  
   document.body.style.backgroundColor= "gray";
   document.body.classList.add('bg-'+cls);
   console.log(cls);

   console.log("toggle mode clicked on click if condcito")
  }
   else{
    setchange("dark  ")
    document.body.classList.add('bg-'+cls);
    // document.body.style.backgroundColor= "white";
    console.log("toggle else part run")
   }
   }
  
   const removeclass = () =>{
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-light')
   }
  return (
  <div >
  <Navbar title={"TextEdit"} toggle={toggle} change={change}/>
  <Form change={change}  />
  </div>
  );
}

export default App;
