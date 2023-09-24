import React, { useState, useEffect } from 'react';
import './Office.css'; // Import the CSS file
import personStockImage from './person-stock.png'; // Import the person image
import officeImage from './office.jpg'; // Import the office image

function Office() {
  const [leftPosition, setLeftPosition] = useState(-200); // Initial left position
  const [isMoving, setIsMoving] = useState(true); // Control whether to keep moving

  // Animate the person image's left position
  useEffect(() => {
    const movePerson = () => {
      if (isMoving) {
        // Continue moving the person until they reach the middle
        const newPosition = leftPosition + 400; // Adjust the distance and speed as needed
        setLeftPosition(newPosition);
        if (newPosition >= 400) {
          setIsMoving(false); // Stop moving when the person reaches the middle (adjust the threshold as needed)
        }
      }
    };

    const interval = setInterval(movePerson, 2000); // Adjust the interval as needed

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [leftPosition, isMoving]);

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
