import React from 'react';
import './Dots.css';

type Props = {
  activeIndex: number;
  onSelect: (index: number) => void;
  totalDots: any;
};

export function Dots({ activeIndex, onSelect, totalDots }: Props) {
  const count = totalDots.length;
  const buttons = [];
  for (let i: number = 0; i < count; i++) {
    buttons.push(
      <button
        key={i}
        onClick={() => onSelect(i)}
        className={`dot-button ${activeIndex === i ? 'active' : ''}`}></button>
    );
  }

  return <div className="dots">{buttons}</div>;
}
