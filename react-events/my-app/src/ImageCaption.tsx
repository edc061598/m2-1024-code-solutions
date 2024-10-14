import { useState } from 'react';

type Props = {
  captions: string[];
};

export function ImageCaption({ captions }: Props) {
  const [imageCapIndex, setImageCapIndex] = useState(0);

  function handleClick() {
    if (imageCapIndex >= captions.length - 1) {
      setImageCapIndex(0);
    } else {
      setImageCapIndex(imageCapIndex + 1);
    }
  }

  return (
    <div>
      <h3 onClick={handleClick}>{captions[imageCapIndex]}</h3>
    </div>
  );
}
