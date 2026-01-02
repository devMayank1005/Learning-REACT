import React, { useState } from 'react';

const App = () => {
  const [num, setNum] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Number:", num, "Submitted"); // handle form submission logic here
  };

  return (
    <div>
      <form onSubmit={(e) => {
        setNum(e.target[0].value);
        submitHandler(e);
      }}>
        <input
          type="text"
          placeholder="Enter a number"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
