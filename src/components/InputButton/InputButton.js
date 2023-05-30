import React, { useState } from 'react';
import './InputButton.css'

function InputButton(){

  const [headingText, setHeadingText] = useState("...")
  const [buttonColor, setButtonColor] = useState()
  const [name, setName] = useState()

  function handleClick(event) {
    setHeadingText(name)
    event.preventDefault()
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
        <form onSubmit={handleClick}>
          <input onChange={handleChange} type="text" placeholder="Say hi to..." value={name} />
          <button type="submit" style={{backgroundColor: buttonColor, cursor: 'pointer'}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >Hi to {name}</button>
        </form>
      </div>
      <h1>Hi {headingText}</h1>
    </div>
  )
}

export default InputButton
