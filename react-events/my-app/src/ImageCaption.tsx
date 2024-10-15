//import { useState } from 'react';

type Props = {
  captions: string;
  onCaptionClick: () => void;
};

export function ImageCaption({ captions, onCaptionClick }: Props) {
  /* const [imageCapIndex, setImageCapIndex] = useState(0);

  function handleClick() {
    if (imageCapIndex >= captions.length - 1) {
      setImageCapIndex(0);
    } else {
      setImageCapIndex(imageCapIndex + 1);
    }
  }
*/
  return (
    <div>
      <h3 onClick={onCaptionClick}>{captions}</h3>
    </div>
  );
}
