
import React, { useState } from 'react'

export default function TextArea(props) {
    const [text, setText] = useState("");

    const TextToUpper = () => {
        console.log('button clicked')
        let newText = text.toUpperCase();
        setText(newText)
    }
    const TextToLower = function () {
        let newLowertext = text.toLocaleLowerCase();
        setText(newLowertext)
    }

    const Changing = function (e) {
        console.log("onchange")
        setText(e.target.value)
    }

    const ClearText = () => {
        setText("")
    }




    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="mb-3" >
                    <h2>Enter your text here</h2>
                    <textarea className="form-control" value={text} onChange={Changing} style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className='btn btn-primary' onClick={TextToUpper}>Convert to uppercase</button>
                <button className='btn btn-primary mx-4' onClick={TextToLower}>Convert to lowercase</button>
                <button className='btn btn-primary mx-2' onClick={ClearText}>Clear</button>
            </div>

            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summery</h2>
                <p>Your text has {text.split(" ").length} and {text.length} characters</p>
                <p>{Math.ceil(0.008 * text.split(" ").length)} minutes of read</p>
                {/* <p>{text}</p> */}
            </div>
        </>
    )
}
