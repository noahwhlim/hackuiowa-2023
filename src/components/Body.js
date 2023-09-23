import React from 'react'
import { Scenario } from './Scenario'
import { Game } from './Game'
import { useState } from 'react'


export const Body = () => {

    const [number, setNumber] = useState(0);

    const instantiateNumber = () => {
        setNumber(Math.floor(Math.random() * 3))
        console.log(number)
    }

  return (
    <div className='flex flex-col'>
        <div className='flex flex-row w-full bg-blue-500 h-full'>
            <div className='w-1/2'> 
                <Scenario num={number}/>
            </div>
            <div className='w-1/2'>
                <Game />
            </div>
        </div>
        <div>
            <button onClick={instantiateNumber}>Press me to play</button>
        </div>
    </div>
  )
}

