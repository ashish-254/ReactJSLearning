import React, { useState } from 'react'


export default function TextForm2(props) {
    const [text, setText] = useState("Enter your text");

    // if (props.mode === 'dark') {
    //     changeBStyle({
    //         background: 'white',
    //         color: 'black'
    //     })
    // }
    // else{
    //     changeBStyle({
    //         background: 'black',
    //         color: 'white'
    //     })
    // }


    //functionalities
    const convertUpCase = () => {
        setText(text.toUpperCase())
    }

    const convertLoCase = () => {
        setText(text.toLowerCase())
    }
    const changeT = (event) => {
        setText(event.target.value)
    }


    return (
        <>
            <div className='container' style={props.mode === 'dark'?{background: '#52585e',color: 'white', border:'1px solid white'}:{background: 'white',color: 'black',border:'1px solid black'}}>
                <h1>Enter Your Text Below </h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} onChange={changeT} rows="8"></textarea>
                </div>
                <div>
                    <button className="btn-primary btn mb-3 mx-1" onClick={convertUpCase}>Convert ot upper case</button>
                    <button className="btn-primary btn mb-3 mx-1" onClick={convertLoCase}>Convert ot lower case</button>
                </div>
                <div className="container">
                    <h3>Summary</h3>
                    <p>{text.split(' ').length} words and {text.length} characters</p>
                    <h3>Preview</h3>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}
