import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';

type Props = {
  onClick: () => void;
};
export function PrevButton({ onClick }: Props) {
  return (
    <button className="prev-button" onClick={onClick}>
      <FaChevronLeft />
    </button>
  );
}
