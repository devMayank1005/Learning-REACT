import React from 'react'

const Navbar = (props) => {
  return (
    <div className="bg-pink-500 p-4 text-white flex justify-between items-center">
      Navbar
      <h2>Navbar</h2>
      <div className="flex space-x-4">
        <h4 className="hover:underline cursor-pointer">Home </h4>
        <h4 className="hover:underline cursor-pointer">About</h4>
        <h4 className="hover:underline cursor-pointer">Contact</h4>
         {props.links.map((elem, index) => (
          <h4 key={index} className="hover:underline cursor-pointer">{elem}</h4>
        ))}
      </div>
    </div>
  )
}

export default Navbar
