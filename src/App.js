// @ts-nocheck
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';

// import About from './components/About';
import TextForm from './components/TextForm';
import Warn from './components/Warn';



function App() {
 const[mode, setMode]= useState('light');
 const[warn, setWarn]=useState(null);
 

 const ShowWarn =(message, type)=>{
  setWarn({
    message:message,
    type:type

  })
  setTimeout(()=>{
    setWarn(null);


  },1500);

  

 }
 
const toggleMode=()=>{
  if(mode==='light'){
    setMode("dark");
    document.body.style.backgroundColor="#063166"
    ShowWarn("Dark mode is enabled", "Sucess")
    

  }
 else{
  setMode("light");
  document.body.style.backgroundColor="white"
  ShowWarn("Light mode is enabled", "Sucess")
  

 }


  
}



  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}  title="My Web page" aboutText="About Us" />
    <Warn  warn={warn} />
    
{/* 
    <About /> */}

    <div className='container my-3'>
    <TextForm  showWarn={ShowWarn} heading="Enter the text to analyze"  mode={mode}/>
    </div>

    </>
   
  
   
  );
}

export default App;
