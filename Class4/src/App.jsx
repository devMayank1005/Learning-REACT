import React from 'react'
import Navbar from '../Componenets/Navbar'


/*************  ✨ Windsurf Command ⭐  *************/
/**
 * App component
 * 
 * This component renders a page with a title and three instances of the Navbar component.
 * 
 * The Navbar components are rendered with different titles and links.
 * 
 * @returns {JSX.Element} The rendered App component.
 */
/*******  d40faa2e-1f19-42ff-be04-399262a18aac  *******/
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
