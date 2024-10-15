//import { useState } from 'react';

type Props = {
  descs: string;
  onDescriptionClick: () => void;
};

export function ImageDescription({ descs, onDescriptionClick }: Props) {
  /* const [descIndex, setdescIndex] = useState(0);

  function handleClick() {
    if (descIndex >= descs.length - 1) {
      setdescIndex(0);
    } else {
      setdescIndex(descIndex + 1);
    }
  }*/

  return (
    <div>
      <p onClick={onDescriptionClick}>{descs}</p>
    </div>
  );
}
