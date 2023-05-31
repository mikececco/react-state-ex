import React, {useState} from 'react';
import './PlusMinus.scss'

function PlusMinus(){
  const [count, setCount] = useState(0)

  function increase(){
    setCount(count + 1)
  }

  function decrease(){
    if (count !== 0) {
      setCount(count - 1);

    }
  }

  return (
    <div className="container">
      <div className="center">
        <button onClick={decrease} id="decrease" disabled={count === 0} className="fancy-button bg-gradient2"><span>-</span></button>
        <h1>{count}</h1>
        <button onClick={increase} className="fancy-button bg-gradient2"><span>+</span></button>
      </div>
    </div>
  );
}

export default PlusMinus
