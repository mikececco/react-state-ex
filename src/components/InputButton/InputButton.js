import React, { useState } from 'react';
import './InputButton.css'

function InputButton(){

  const [headingText, setHeadingText] = useState()
  const [buttonColor, setButtonColor] = useState()
  const [name, setName] = useState()

  function handleClick() {
    setHeadingText(name)
  }

  function handleMouseOver() {
    setButtonColor("black")
  }

  function handleMouseOut() {
    setButtonColor()
  }

  function handleChange(event){
    setName(event.target.value)
  }

  return (
    <div>
      <div className="container">
        <input onChange={handleChange} type="text" placeholder="Type your name" value={name} />
        <button style={{backgroundColor: buttonColor, cursor: 'pointer'}} onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >Submit</button>
      </div>
      <h1>Hello {headingText}</h1>
    </div>
  )
}

export default InputButton
