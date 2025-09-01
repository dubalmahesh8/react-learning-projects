import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
 const [text, setText] = useState('')

 const handleOnChange = (textarea) =>{
    console.log('OnChange Event Trigerred :: '+textarea.target.value)
    setText(textarea.target.value);
 }

 const handleToUpperCase = () =>{
    console.log('Uppercase is called :: '+text)
    let newText = text.toUpperCase();
    setText(newText);
 }

 const handleToLowerCase = () =>{
    console.log('Lowercase is called :: '+text)
    let newText = text.toLowerCase();
    setText(newText);
 }

 const handleClearEvent = () =>{
    setText('');
 }

 const handleCopy = () =>{
   console.log("I am copy");
   var text = document.getElementById("exampleFormControlTextarea1");
   text.select();
   navigator.clipboard.writeText(text.value);
 }

 const handleExtraSpaces = () =>{
   let newText = text.split(/[ ]+/);
   setText(newText.join(" "))
 }

  return (
    <div className="mb-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label> */}
        <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} 
        style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}  rows="8"></textarea>
        <br></br>
        <button type="button" className="btn btn-primary mx-1" onClick={handleToUpperCase} >Convert to Uppercase</button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleToLowerCase} >Convert to Lowercase</button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleClearEvent} >Clear</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <br></br>
        <h2>Your text summary</h2>
        <p>{text.trim() === ''? 0 : text.trim().split(" ").length} words and {text.length} characters</p>
        {/* <p>{0.008 *  text.split(" ").length} Minutes read</p> */}
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
  )
}
