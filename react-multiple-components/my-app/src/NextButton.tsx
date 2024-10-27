import React from 'react';

type Props = {
  onNext: () => void;
};

export function NextButton({ onNext }: Props) {
  return (
    <button onClick={onNext} className="next-button">
      Next
    </button>
  );
}
