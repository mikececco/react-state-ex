import React, { useState } from 'react';
import './NameSurname.css'

function NameSurname() {
  const [fullName, setFullName ] = useState({
    fName: "",
    lName: ""
  })

  function handleChange(event) { //synthetic React event, never put it in statefull function like setFullName(preValue => {if (event.target.name === ...)

    const {value, name} = event.target

    setFullName(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        }
      } else {
        return {
          fName: prevValue.fName,
          lName: value
        }
      }
    })
  }

  function handleClick(event) {

    const inputs = document.querySelectorAll('form input');

    inputs.forEach(input => {
      input.value = '';
    });

    event.preventDefault();
  }

  return (
    <div>
      <div className="container enhanced">
        <form onSubmit={handleClick}>
          <input onChange={handleChange} name="fName" placeholder="First Name" value={fullName.fName} />
          <input onChange={handleChange} name="lName" placeholder="Last Name" value={fullName.lName} />
          <button style={{cursor: 'pointer'}}>Submit</button>
        </form>
      </div>
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
    </div>
  )
}

export default NameSurname
