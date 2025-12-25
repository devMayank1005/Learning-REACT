import React from 'react';
import Card from './components/Card';
import Button from './components/Button';

const App = () => {
  const age = 18;

  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold text-blue-600">
        Hello, Tailwind CSS with Vite and React!
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        This is a simple setup using Tailwind CSS in a Vite + React project.
      </p>

      {/* Correct way */}
      <Card user="mayank" age= {21} />
      <Card user="vashu" />

      {age >= 18 ? (
        <p className="mt-4 text-green-600">You are eligible to vote.</p>
      ) : (
        <p className="mt-4 text-red-600">You are not eligible to vote.</p>
      )}

      <Button text = "Click Me"/>
    </div>
  );
};

export default App;
