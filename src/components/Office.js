import React, { useState, useEffect } from 'react';
import './Office.css'; // Import the CSS file
import personStockImage from './person-stock.png'; // Import the person image
import officeImage from './office.jpg'; // Import the office image

function Office() {
  const [leftPosition, setLeftPosition] = useState(-200); // Initial left position
  const [isMoving, setIsMoving] = useState(true); // Control whether to keep moving

  <a id="rotator"><img src="./person-stock.png" /></a>

 return (
    <div className="office-container">
      <img
        src={officeImage}
        alt="Office Image"
        className="office"
      />
      <img
        src={personStockImage}
        alt="Person Stock Image"
        className="person"
        style={{ left: `${leftPosition}px` }}
      />
    </div>
  );
}

export default Office;
