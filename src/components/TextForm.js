// @ts-nocheck
import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("Uppercase was clicked" + text); --just for debugging
        let newText=text.toUpperCase();
        setText(newText);
        props.showWarn("Convert to Upper Case", "Success")
    };

    const handleLoClick =()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showWarn("Convert to Lower Case", "Success")
    };

    const handleClearClick =()=>{
        let newText="";
        setText(newText);
        props.showWarn("Clear the text", "Success")
    };

    const handleRemoveClick =()=>{
        let newText=text.replace(/[,]/g ,"");
        setText(newText);
        props.showWarn("Deleted the comma between the text", "Success")
    };

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showWarn("Speech mode on", "Success")
      };

      const handleCopyClick =() =>{
        var text= document.getElementById("MyBox");
        text.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value)
        props.showWarn("Text Copy", "Success")
        
       
    


      };

    // OnChange vent to enable wrting funtion
    const handleOnChange =(event)=>{
        // console.log("On Change"); --just for deb
        setText(event.target.value);
    }

    


    // creating a state i.e. text
    const [text, setText]= useState("");
    // setText("new text");

    
  return (
    <>
    <div className='container' style={{color: props.mode==="light"?"#063166":"white"}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==="light"?"white":"#063166", color:props.mode==="light"?"#063166":"white"}}onChange={handleOnChange} id="MyBox" rows="8"></textarea>
        </div>
        <button className="btn btn-outline-primary mx-2" onClick={handleUpClick} style={{color: props.mode==="light"?"#063166":"white"}}>Convert to Uppercase</button>
        <button className="btn  btn-outline-primary mx-2" onClick={handleLoClick} style={{color: props.mode==="light"?"#063166":"white"}}> Convert to Lowercase</button>
        <button className="btn btn-outline-primary mx-2" onClick={handleClearClick} style={{color: props.mode==="light"?"#063166":"white"}}>Clear text</button>
        <button className="btn btn-outline-primary mx-2" onClick={handleRemoveClick} style={{color: props.mode==="light"?"#063166":"white"}}>Delete Comma</button>
        <button type="submit" onClick={speak} className="btn btn-outline-primary mx-2" style={{color: props.mode==="light"?"#063166":"white"}}>Speak</button>
        <button type="submit" onClick={handleCopyClick} className="btn btn-outline-primary mx-2" style={{color: props.mode==="light"?"#063166":"white"}}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==="light"?"#063166":"white"}}>
        <h2>Your Text Summary</h2>
        <p> {text.split(' ').filter(function(n) { return n !== '' }).length} words and {text.length}characters</p>
        <p>{0.008 * text.split(" ").length} Minutes taken to read</p>
        <p>{text.split(".").length} Sentences</p>
        <h2>Preview</h2>
        <p>{text} Enter something to preview here..</p>
    </div>
    

    </>
  )
}
