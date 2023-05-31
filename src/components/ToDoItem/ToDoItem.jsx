import React from 'react';

function ToDoItem(props) {

  return (
    <div onClick={() => {
      props.onChecked(props.id)
    }} style={{cursor: 'pointer'}}>
      <li>{props.text}</li>
    </div>
  )
}

export default ToDoItem;
