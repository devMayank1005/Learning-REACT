import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

const App = () => {
  return (
    <div>
      <h1>Hello Vite!</h1>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>  
    </div>
  )
}

export default App



