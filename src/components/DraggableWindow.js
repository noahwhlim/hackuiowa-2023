import React from 'react';
import Draggable from "react-draggable";

import './Game.css';

const DraggableWindow = ({ selected, selectedValue }) => {
  // You can use the 'selected' and 'selectedValue' props here
  // to customize the JSX you want to return.
  return (
    <div className="window-element">
        <Draggable>
            <div className='bg-zinc-500 p-2 rounded-md border text-white border-zinc-500 my-4'>
            <p>{selected ? selected.value : ''}</p>
            </div>
        </Draggable>
    </div>
  );
};

export default DraggableWindow;