import { useState } from 'react';
import './HotButton.css';

export function HotButton() {
  const [clicks, setClicks] = useState(0);
  let colorIndex = Math.floor(clicks / 3);

  const colors: string[] = [
    'purple',
    'blue',
    'red',
    'green',
    'yellow',
    'white',
  ];

  if (colorIndex > colors.length) {
    colorIndex = colors.length - 1;
  }
  function handleClick() {
    setClicks((prevClicks) => prevClicks + 1);
  }
  return (
    <button
      onClick={handleClick}
      className={`hot-button ${colors[colorIndex]}`}>
      HOT BUTTON
    </button>
  );
}
