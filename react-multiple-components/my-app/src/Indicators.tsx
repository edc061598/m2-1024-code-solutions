import React from 'react';
import './Indicators.css';
type Props = {
  items: string[];
  currentIndex: number;
  onSelect: (index: number) => void;
};

export function Indicators({ items, currentIndex, onSelect }: Props) {
  const count = items.length;
  const buttons = [];
  for (let i: number = 0; i < count; i++) {
    buttons.push(
      <button
        onClick={() => onSelect(i)}
        className={`indicator-button ${currentIndex === i ? 'active' : ''}`}>
        {i + 1}
      </button>
    );
  }

  return <div className="indicators">{buttons}</div>;
}
