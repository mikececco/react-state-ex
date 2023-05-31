import React, { useState } from "react";
import ToDoItem from '../ToDoItem/ToDoItem';
import InputArea from '../InputArea/InputArea';
import './ToDoList.css';

function ToDoList() {
  const [items, setItems] = useState([])

  function addItem(list) {
    setItems((prevItems) => {
      return [...prevItems, list]
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter(
        (item, index) => {
          return index !== id;
        }
      )
    })
  }

  return (
    <div className="containerr">
      <div className="headingg">
        <h1>To-Do List</h1>
      </div>
      <div className="formm">
        <InputArea
        addItem={addItem}/>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <ToDoItem
            key={index} //ideally use UUID
            id={index}
            text={item}
            onChecked={deleteItem}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
