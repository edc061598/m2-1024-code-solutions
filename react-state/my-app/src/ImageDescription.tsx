import { useState } from 'react';

type Props = {
  descriptions: string[];
};

export function ImageDescription({ descriptions }: Props) {
  const [index, setIndex] = useState(0);
  function handleClick() {
    if (index >= descriptions.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  return (
    <div>
      <p onClick={handleClick}>{descriptions[index]}</p>
    </div>
  );
}
