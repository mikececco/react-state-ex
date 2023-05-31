import React, { useState } from "react";
import ToDoItem from '../ToDoItem/ToDoItem';
import './ToDoList.css';

function ToDoList() {
  const [list, setList] = useState("");
  const [items, setItems] = useState([])

  function handleAdd(event) {
    const newValue = event.target.value;
    setList(newValue)
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, list]
    });
    setList("");
  }

  return (
    <div className="containerr">
      <div className="headingg">
        <h1>To-Do List</h1>
      </div>
      <div className="formm">
        <input onChange={handleAdd} type="text" value={list}/>
        <button style={{cursor: 'pointer'}} onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(item => <ToDoItem text={item}/>)}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
