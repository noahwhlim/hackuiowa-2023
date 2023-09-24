import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import { Header } from './components/Header';
import { Body } from './components/Body';
import Footer from './components/Footer';
import { Modal, Box } from '@mui/material';
import './components/ExternalFonts.css';
import './App.css';


function App() {
  const [popup, setPopup] = useState(true)

  const popupWindow = () => {
    return (
      <Modal open={popup} className='flex justify-center items-center text-white outline-none border-none' id='game_text'>
        <Box className='flex flex-col px-24 py-12 mx-28' style={{backgroundImage: "url(/images/BeginBacker.png)", backgroundRepeat: "no-repeat",
            backgroundSize: "cover", maxWidth: 1200, maxHeight: 300, minWidth: 1200, minHeight: 300, postion: "fixed"}}>
          <p className='mb-8'>Welcome to Misfortune Metropolis, Iowa- a city where disasters are always just around the corner! To save the day Silly Goose Insurance has taken on the task of providing all kinds of insurance to help the citizens of Misfortune protect themselves against the city's many perils. As a new insurance broker Cale Amnity, it's your job to help your clients find the best insurance for their needs.</p>
          <button onClick={() => {setPopup(false)}} className='bg-blue-500 rounded-md items-center p-2'>Got it!</button>
        </Box>
      </Modal>
    )
  }

  return (
    <div className='flex flex-col min-h-screen' id="gameBacking">
    {popup ? popupWindow() : <></>}
    <Header />  
    <div className="scrollable-content">
      <Body />
    </div>
    <Footer />
  </div>
  );
}

export default App;
