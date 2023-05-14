// @ts-nocheck
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';

// import About from './components/About';
import TextForm from './components/TextForm';
import Warn from './components/Warn';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

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
    // document.title=("Text Analyzer- Dark mode enable")
    // setInterval(()=>{
    //   document.title="Text Analyzer- Light mode enable";
    // }, 2000);
    

  }
 else{
  setMode("light");
  document.body.style.backgroundColor="white"
  ShowWarn("Light mode is enabled", "Sucess")
  // document.title=("Text Analyzer- Light mode enable")
  }
}
 return (
 <>
    {/* <Router> */}
      <Navbar mode={mode} toggleMode={toggleMode}  title="Text Analyzer Page" aboutText="About Us" />
      <Warn  warn={warn} />
      <div className='container my-3'>
      <TextForm  showWarn={ShowWarn} heading="Enter the text to analyze"  mode={mode}/>
        {/* <Routes>
          <Route path="/" element={<TextForm  showWarn={ShowWarn} heading="Enter the text to analyze"  mode={mode}/>} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About/>}/>
        </Routes> */}
        </div>
      {/* </Router> */}
      
    
</>
   
   
   
  );
}

export default App;
