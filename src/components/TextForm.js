import React , {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
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
    
    // if(document.getElementById('myBox').value != null){
    // let textElement = document.getElementById('myBox').value;
    // previousText = textElement;
    // }
    
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
        document.getSelection().removeAllRanges();
        props.showAlert('Text Copied' , 'success');
    }

//     let previousText = text;
//     const handleUndo = () => {
//     console.log("undo running")
//     const textElement = document.getElementById('myBox'); // Replace with the actual ID of your input element
//     if (previousText !== '') {
//         textElement.value = previousText;
//     }
// };


    
  return (
    <>
    <div className='container' style={{color : props.mode==='light'?'black':'white'}}>
        <h1 className='my-1'>{props.heading}</h1>
        <div className="mb-3 my-1">
            {/* <label for="myBox" className="form-label"></label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='light'?'white' : '#23272f' , 
        color: props.mode==='light'?'black':'white'}}></textarea>
            <button disabled={text.length===0} className='btn btn-warning my-2 mx-1' onClick={clearText}> Clear text</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleCopy}>Copy Text</button>
            {/* <button className="btn btn-success my-2" onClick={handleUndo}>Undo</button> */}
        </div>
    </div>
    <div className="container my-3" style={{color : props.mode==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
        <p>{text.length>0?0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length:0 } minutes to read</p>
        
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above textbox to preview"}</p>
    </div>
    </>
  )
}
