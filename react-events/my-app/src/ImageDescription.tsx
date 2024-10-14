import { useState } from 'react';

type Props = {
  descs: string[];
};

export function ImageDescription({ descs }: Props) {
  const [descIndex, setdescIndex] = useState(0);

  function handleClick() {
    if (descIndex >= descs.length - 1) {
      setdescIndex(0);
    } else {
      setdescIndex(descIndex + 1);
    }
  }

  return (
    <div>
      <p onClick={handleClick}>{descs[descIndex]}</p>
    </div>
  );
}
