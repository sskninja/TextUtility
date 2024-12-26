import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick =()=>{
    let newText = text.toUpperCase();
    setText(newText)
  } 
  const handleLoClick =()=>{
    let newText = text.toLowerCase();
    setText(newText)
  } 

  const handleOnChange = (event)=> {
    setText(event.target.value);
  } 

  const handleCopy = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    
  } 

  const handleExtraSpaces = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const[text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgrounColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'#042743'}}id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
 
  <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
  <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}> 
    <h2>Your Text Here</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008* text.split(" ").length} Minutes Read</p>
    <h2>Preview</h2>
    <p>{text}</p>

  </div>
</div>
</>
  )
}
