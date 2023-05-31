import React, { useState } from 'react';

function InputArea(props) {

  const [list, setList] = useState("");

  function handleAdd(event) {
    const newValue = event.target.value;
    setList(newValue)
  }

  return (
    <div>
      <input onChange={handleAdd} type="text" value={list}/>
        <button style={{cursor: 'pointer'}} onClick={() => {
          props.addItem(list);
          setList("");
        }}>
          <span>Add</span>
        </button>
    </div>
  );
}

export default InputArea;
