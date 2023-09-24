import React from 'react'
import './Footer.css';

export const Footer = () => {
  return (
    <footer className='flex text-md text-white bg-zinc-800 py-4 px-2 justify-center'>
        Created by: <a href="https://github.com/katmathematics" target="_blank" id = "link-element">Katja Mathesius</a>, <a href="https://github.com/noahwhlim" target="_blank" id = "link-element">Noah Lim</a>, and <a href="https://github.com/jasonweng1" target="_blank" id = "link-element">Jason Weng</a> | <a href="https://hackuiowa-23.devpost.com/" target="_blank" id = "link-element"> HACKUIOWA '23 </a>
    </footer>
  )
}
