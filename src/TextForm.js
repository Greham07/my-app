import React, { useState } from 'react'


export default function TextForm(props) {

    const handleupclick = () => {
        // console.log('upper case was clicked' + text)
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("convert in to upper case","success")
        
    }
    const handleupclick1 = () => {
        // console.log('upper case was clicked' + text)
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("convert in to lower case","success")
    }
    const handleupclearclick = () => {
        // console.log('upper case was clicked' + text)
        let newtext = '';
        setText(newtext)
        props.showAlert("text cleared","success")
    }
    const capitalfirstword = () => {
        // console.log('upper case was clicked' + text)
        let newtext = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newtext)
        props.showAlert("first letter has been capitalized","success")
    }
    const copyhandle = () => {
        // console.log('upper case was clicked' + text)
        var text = document.getElementById("mybox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("copyed succesfully","success")
        
    }
    const extraspace = () => {
        // console.log('upper case was clicked' + text)
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(' '))
        props.showAlert("extra speaces has been removed","success")
    }


    const handleonchange = (event) => {
        // console.log('on changed');
        setText(event.target.value)
    }


    // var text = text.value;
    // var numWords = 0;
    // for (var i = 0; i < text.length; i++) {
    //     var currentCharacter = text[i];

    //     // Check if the character is a space
    //     if (currentCharacter == " ") {
    //         numWords += 1;
    //     }
    // }

    const [text, setText] = useState("");
    return (
        <>
            <div className='container' style={{ color : props.mode === 'dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="mybox" rows="10" onChange={handleonchange}  style={{ backgroundColor : props.mode === 'dark'?'black':'white',color : props.mode === 'dark'?'white':'black'}} value={text}></textarea>
                </div>
                <button className="brn btn-primary" onClick={handleupclick}>Convert to upperCase</button>
                <button className="brn btn-primary mx-3" onClick={handleupclick1}>Convert to lowerCase</button>
                <button className="brn btn-primary " onClick={handleupclearclick}>Clear text</button>
                <button className="brn btn-primary mx-3" onClick={capitalfirstword}>Capital first Word</button>
                <button className="brn btn-primary mx-3"  onClick={copyhandle}>copy hear</button>
                <button className="brn btn-primary mx-3"  onClick={extraspace}>extraspace</button>
                
            </div>
            <div className="container my-4"  style={{ color : props.mode === 'dark'?'white':'black'}}>
                <h2>your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split("").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"enter hear to preview"}</p>
            </div>
        </>
    )
}
