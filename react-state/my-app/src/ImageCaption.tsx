import { useState } from 'react';

type Props = {
  caption: string[];
};

export function ImageCaption({ caption }: Props) {
  const [index, setIndex] = useState(0);
  function handleClick() {
    if (index >= caption.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <div>
      <h3 onClick={handleClick}>{caption[index]}</h3>
    </div>
  );
}
