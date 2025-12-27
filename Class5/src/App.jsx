import React from 'react'
import { useState } from 'react';

const App = () => {


  const [count, setCount] = useState(0)
  const Num = count % 2 === 0 ? "Even" : "Odd";
  
  
   let btnClick=()=>{
    console.log("Button Clicked");
    setCount(count+1);

   }
  return (
    <div>
      <h1> {count}</h1>
      <button onClick={btnClick}>Click Me</button>
      <h2>{Num}   </h2>
      <button onClick={() => setCount(count - 1)}>Decrement</button>   
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
       

    </div>
  )
}

export default App
