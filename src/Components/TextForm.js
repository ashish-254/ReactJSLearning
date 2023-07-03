import React, { useState } from 'react'

export default function TextForm() {

    const [text, setText] = useState("Enter your text");
    const [btnText, changeBtnText] = useState("Enable Dark Mode");

    const [bStyle, changeBStyle] = useState({
        background: 'white',
        color: 'black',
        border: '5px solid red'
    })


    const funC =() =>{
        if(bStyle.background === 'white'){
            changeBtnText("Enable Light Mode");
            changeBStyle({
                background:'black',
                color:'white',
                border: '5px solid yellow'
            })
        }
        else{
            changeBtnText("Enable Dark Mode");
            changeBStyle({
                background:'white',
                color:'black',
                border: '5px solid red'
            })
        }
        
    } 


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
            <div className='container' style={bStyle}>
                <h1>Enter Your Text Below </h1>
                {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} onChange={changeT} rows="8"></textarea>
                </div>
                <div>
                    <button className="btn-primary btn mb-3 mx-1" onClick={convertUpCase}>Convert ot upper case</button>
                    <button className="btn-primary btn mb-3 mx-1" onClick={convertLoCase}>Convert ot lower case</button>
                    <button className="btn-primary btn mb-3 mx-1" onClick={funC}>{btnText}</button>
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
