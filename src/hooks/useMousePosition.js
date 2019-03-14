import { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [{ x, y }, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = event => {
    setMousePosition({ x: event.clientX, y: event.clientY});
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return [x, y];
}

export default useMousePosition;
