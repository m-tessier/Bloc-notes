import React from 'react';

const Button = ({ text, type, eventFunction }) => (
  <div>
    <button onClick={eventFunction} className="btn" type={type}>{text}</button>
  </div>
);

export default Button;