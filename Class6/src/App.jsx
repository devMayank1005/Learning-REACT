import React, { useState } from 'react';

const App = () => {
   const [username, setUsername] = useState('');
   const [allUsers, setAllUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const newAllUsers = [...allUsers, username];

    
    console.log(newAllUsers);
     
    setAllUsers(newAllUsers);
  
    console.log("Number:", username, "Submitted"); // handle form submission logic here

    setUsername(''); // Clear the input field after submission
  };
 


  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter a number"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
