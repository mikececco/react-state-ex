import React from 'react';

function ToDoItem(props) {

  return (
    <div>
      <li>{props.text}</li>
      <button onClick={() => {
      props.onChecked(props.id)
    }} style={{cursor: 'pointer'}}>Delete {props.text}</button>
    </div>
  )
}

export default ToDoItem;
