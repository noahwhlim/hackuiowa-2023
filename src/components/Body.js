import React from 'react'
import { Scenario } from './Scenario'
import { Game } from './Game'
import { useState, useEffect } from 'react'
import './Body.css';

export const Body = () => {

    const [number, setNumber] = useState(0);


    const instantiateNumber = () => {
        setNumber(Math.floor(Math.random() * 10))
    }

    const refreshQuestion = () => {
        instantiateNumber()
    }


  return (

        <div className='flex flex-col bg-green-500 h-full'>
            <div className='flex flex-row w-full bg-zinc-700 h-full'>
                <div className='w-1/2'> 
                    <Scenario num={number}/>
                </div>
                <div className='w-1/2'>
                    <Game num={number} refresh={refreshQuestion}/>
                </div>
            </div>
            <div className='flex bg-zinc-700 justify-center p-2'>
                <button onClick={instantiateNumber} 
                        className='bg-gray-200 rounded-md px-4 py-2'>
                    New Question
                </button>
            </div>
        </div>

  )
}

