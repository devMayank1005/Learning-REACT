import React from 'react';

const Card = (props) => {
  return (
    <div className="max-w-sm mx-auto mt-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold text-black">{props.user} {props.age}</h1>
    </div>
  );
};

export default Card;
