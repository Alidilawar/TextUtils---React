import React, { useState } from 'react'

export default function Textform(props) {

    // Upper Case

    const handleUpClick = () =>{
        // console.log("Uppercase was click: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Upper Case!','success');
    }

    // Lower Case

    const handleLoClick = () =>{
        // console.log("Uppercase was click: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lower Case!','success');
    }

    // Clear Case

    const handleClearClick = () =>{
        let newText = '';
        setText(newText);
        props.showAlert('Text Cleared!', 'success');
    }
    
    // Capitalize Case

    const handleCapitalClick = () => {
        let newText = text.split(" ").map((currentValue) => {
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return newText;
        });
        setText(newText.join(" "));
        props.showAlert('Converted to Capatilize Case!','success');
    }

    // Copy Case

    const handleCopy = ()=>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to Clipboard!', 'success');
    }

    // Extra Spaces Case

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Removed Extra Spaces!', 'success');
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    
    // Declare a new state variable, which we'll call "count"
    const [text, setText] = useState("");
    // text = "new text" // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'#042743'}} value={text} placeholder="Enter your text" onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-sm btn-dark mx-1 my-1" onClick={handleUpClick}>Upper Case</button>
            <button className="btn btn-sm btn-dark mx-1 my-1" onClick={handleLoClick}>Lower Case</button>
            <button className="btn btn-sm btn-dark mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-sm btn-dark mx-1 my-1" onClick={handleCapitalClick}>Capatilized Case</button>
            <button className="btn btn-sm btn-dark mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-sm btn-dark mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            
        </div>

        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.length>0?text.trimEnd().split(" ").length:0} words and {text.length} character</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text: "Enter something in the textbox above to preview it"}</p>
        </div>

        </>
    )
}
