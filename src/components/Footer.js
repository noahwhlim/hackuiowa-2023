import React from 'react'

export const Footer = () => {
  return (
    <footer className='flex text-md text-white bg-zinc-800 py-4 px-2 justify-center'>
        Created by: <a href="https://github.com/katmathematics" target="_blank" className='cursor-pointer text-blue-500 underline px-[3px] hover:no-underline'>Katja Mathesius</a>, 
        <a href="https://github.com/noahwhlim" target="_blank" className='cursor-pointer text-blue-500 underline px-[3px] hover:no-underline'>Noah Lim</a>, and 
        <a href="https://github.com/jasonweng1" target="_blank" className='cursor-pointer text-blue-500 underline px-[3px] hover:no-underline'>Jason Weng</a> | 
        <a href="https://hackuiowa-23.devpost.com/" target="_blank" className='cursor-pointer text-blue-500 underline px-[3px] hover:no-underline'> HACKUIOWA '23 </a>
    </footer>
  )
}
