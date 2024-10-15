import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';
import { useState } from 'react';

const headerText = 'React Image Bank';
const imageSrc = ['/starry-sky.jpeg', '/cool-kitty.jpg', '/cool-car.jpg'];
const imageCap = ['A Beautiful Image of Space', 'A Cool Cat', 'A Cool Car'];
const imageDescrip = [
  'This is a wonderful sky full of stars!',
  'This is a picture of a very cool cat!',
  'This is a picture of a very cool car!',
];
const buttonLabel = ['Click for Next Image'];

export function App() {
  const [buttonIndex, setButtonIndex] = useState(0);
  function captionClick() {
    if (buttonIndex >= imageSrc.length - 1) {
      setButtonIndex(0);
    } else {
      setButtonIndex(buttonIndex + 1);
    }
  }

  function containerClick() {
    if (buttonIndex >= imageSrc.length - 1) {
      setButtonIndex(0);
    } else {
      setButtonIndex(buttonIndex + 1);
    }
  }

  function descriptionClick() {
    if (buttonIndex >= imageDescrip.length - 1) {
      setButtonIndex(0);
    } else {
      setButtonIndex(buttonIndex + 1);
    }
  }

  function buttonClick() {
    if (buttonIndex >= imageDescrip.length - 1) {
      setButtonIndex(0);
    } else {
      setButtonIndex(buttonIndex + 1);
    }
  }
  return (
    <>
      <Header text={headerText} />
      <ImageContainer
        onContainerClick={containerClick}
        srcs={imageSrc[buttonIndex]}
      />
      <ImageCaption
        onCaptionClick={captionClick}
        captions={imageCap[buttonIndex]}
      />
      <ImageDescription
        onDescriptionClick={descriptionClick}
        descs={imageDescrip[buttonIndex]}
      />
      <ButtonContainer onButtonClick={buttonClick} label={buttonLabel} />
    </>
  );
}
