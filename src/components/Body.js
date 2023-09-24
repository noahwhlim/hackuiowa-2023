import React from 'react'
import { Scenario } from './Scenario'
import { Game } from './Game'
import { useState, useEffect } from 'react'
// import './Body.css';
import './ExternalFonts.css';

export const Body = () => {

    const [number, setNumber] = useState(0);


    const instantiateNumber = () => {
        setNumber(Math.floor(Math.random() * 19))
    }

    const refreshQuestion = () => {
        instantiateNumber()
    }


  return (
    
            <div className='flex flex-col h-screen' id="game_text">
                <div className='flex flex-row w-full h-full'>
                        <div className='w-1/2 bg-no-repeat bg-cover min-w-[600px]' style={{backgroundImage: "url(/images/Clipboard.png)"}}> 
                            <div className='px-12 py-40'>
                                <Scenario num={number}/>
                            </div>
                        </div>
                        <div className='w-1/2 bg-no-repeat bg-cover min-w-[600px]' style={{backgroundImage: "url(/images/Tablet.png)"}}>
                            <div className='px-10 py-28'>
                                <Game num={number} refresh={refreshQuestion}/>
                            </div>
                        </div>
                </div>       
            </div>
  )
}

/*
<div className='flex bg-zinc-700 justify-center p-2'>
                    <button onClick={instantiateNumber} 
                            className='bg-gray-200 rounded-md px-4 py-2'>
                        New Question
                    </button>
                </div>
*/