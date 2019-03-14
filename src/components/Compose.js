import React from 'react';
import useMousePosition from '../hooks/useMousePosition';

const Compose = () => {
  const [x, y] = useMousePosition();

  return (
    <div className="container">
      <h1>Compose</h1>
      <p>x: {x}</p>
      <p>y: {y}</p>
    </div>
  );
}

export default Compose;
