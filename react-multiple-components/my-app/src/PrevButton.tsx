import React from 'react';

type Props = {
  onPrev: () => void;
};

export function PrevButton({ onPrev }: Props) {
  return (
    <button onClick={onPrev} className="prev-button">
      Prev
    </button>
  );
}
