import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("uppercase button clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert('Converted to Uppercase' , 'success');
    }
    const handleLowClick = ()=>{
        // console.log("uppercase button clicked");
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert('Converted to Lowercase' , 'success');
    }
    const handleOnChange = (event)=>{
        // console.log("handling on change");
        setText(event.target.value);
    }
    const clearText = (event)=>{
        setText("");
        props.showAlert('Text has been cleared', 'warning');
    }
    const handleCopy=()=>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text Copied' , 'success');
    }
    const [text, setText] = useState("");
  return (
    <>
    <div className='container' style={{color : props.mode==='light'?'black':'white'}}>
        <h1 className='my-1'>{props.heading}</h1>
        <div className="mb-3 my-1">
            {/* <label for="myBox" className="form-label"></label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='light'?'white' : '#23272f' , 
        color: props.mode==='light'?'black':'white'}}></textarea>
            <button className='btn btn-warning my-2 ' onClick={clearText}> Clear text</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary my-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy Text</button>
        </div>
    </div>
    <div className="container my-3" style={{color : props.mode==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.length>0?text.split(" ").length:"0"} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length } minutes to read</p>
        
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above textbox to preview"}</p>
    </div>
    </>
  )
}
