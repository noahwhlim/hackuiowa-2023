import React from 'react'
import { useState } from 'react'
import Dropdown from 'react-dropdown';
import Select from 'react-select';
import 'react-dropdown/style.css';




export const Game = () => {
    
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState();

    const options = [
        {  label: 'Auto - Liability', value: 'Covers damages to others from accidents you caused. Does not cover any damages to you. Legally required in all states except for New Hampshire and Virginia'},
        {  label: 'Auto - Collision', value: 'Covers collision damages to your vehicle from any source regardless of fault. Required for people with a car lease or loan. Recommended for people who wouldn\'t be able to afford out of pocket repairs if the car is damaged.'},
        {  label: 'Auto - Comprehensive Car Insurance', value: 'Covers damages to your vehicle from non-collision events such as vandalism or natural disasters. Required for people with a car lease or loan. Recommended for people who wouldn\'t be able to afford out of pocket repairs if the car is damaged'},
        {  label: 'Other - Goat', value: 'Makes your pet goat impervious to all damage. An exclusive offering of Silly Goose Insurance not available anywhere else.'}
    ]
    
  return (
    <div className='bg-white m-3 p-2 rounded-md'>
      <Select 
        options={options}
        onChange={(choice) => {setSelected(choice)}}
      />
        {selected ? selected.value : ""}
    </div>
  )
}

 
