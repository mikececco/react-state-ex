import React from 'react';
import animals from './data'

function Table(){
  const [cat, dog] = animals;
  const {name, sound} = cat; //has to be the same as the keys from Objects

  return (
    <div>
      <h1>Destructured the animals array of objs: {name}</h1>
    </div>
  )
}

export default Table;
