import React from 'react';
import animals from './data';
import cars from './practice';
import './Table.css'; // Import the CSS file for styling

function Table() {
  const [cat, dog] = animals;
  const { name: catName } = cat;

  const [honda, tesla] = cars;
  const {
    coloursByPopularity: [hondaTopColour],
    speedStats: { topSpeed: hondaTopSpeed },
  } = honda;
  const {
    coloursByPopularity: [teslaTopColour],
    speedStats: { topSpeed: teslaTopSpeed },
  } = tesla;

  return (
    <div>
      <h3>Destructured the animals array of objects: {catName}</h3>
      <div className="table-container">
        <h4 className="center space-right">Info from destructured array of objects:</h4>
        <table className="center">
          <thead>
            <tr>
              <th>Brand</th>
              <th>Top Speed</th>
              <th>Top Colour</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{tesla.model}</td>
              <td>{teslaTopSpeed}</td>
              <td>{teslaTopColour}</td>
            </tr>
            <tr>
              <td>{honda.model}</td>
              <td>{hondaTopSpeed}</td>
              <td>{hondaTopColour}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
