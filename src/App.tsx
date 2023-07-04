import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Homepage from './pages/homepage'
import React from 'react'
import { ThemeProvider } from "@material-tailwind/react";

function App() {

  return (
    <>
    <React.StrictMode>
    <ThemeProvider>
      <Homepage />
      </ThemeProvider>   

    </React.StrictMode>
       
    </>
  )
}

export default App
