import React from 'react'
import Navbar from '../Componenets/Navbar'


const App = () => {

  function btnClicked() {
    console.log("Button Clicked")
  }
  return (
    <div>
      <button onClick={btnClicked}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click Me</button>
      <h1>Hello, World!</h1>
      <Navbar title="Mayank" links ={["Home","About","Contact"]}/>
      <Navbar title="React" links={["Home","Services","Contact"]}/>
      <Navbar title="Vite" links={["Home","Services","CallBack"]}/>
    </div>
  )
}

export default App
