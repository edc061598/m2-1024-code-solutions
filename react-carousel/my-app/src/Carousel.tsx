import React, { useEffect, useState } from 'react';
import './Carousel.css';
import { ImageCard } from './ImageCard';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';
import { Dots } from './Dots';

const images = [
  {
    src: './Images/fushiguro.webp',
    alt: 'Megumi Fushiguro',
  },
  {
    src: './Images/inumaki.webp',
    alt: 'Toge Inumaki',
  },
  {
    src: './Images/itadori.webp',
    alt: 'Yuji Itadori',
  },
  {
    src: './Images/kugisaki.webp',
    alt: 'Nobara Kugisaki',
  },
  {
    src: './Images/panda.webp',
    alt: 'Panda',
  },
  {
    src: './Images/zen-in.webp',
    alt: "Maki Zen'in",
  },
];

export function Carousel() {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((index) => (index + 1) % images.length);
  };

  const showPrevImage = () => {
    setImageIndex((index) => (index - 1 + images.length) % images.length);
  };

  function handleSelect(index: number) {
    setImageIndex(index);
  }

  useEffect(() => {
    const intervalId = setInterval(showNextImage, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div>
        <ImageCard
          imageSrc={images[imageIndex].src}
          alt={images[imageIndex].alt}
        />
        <PrevButton onClick={showPrevImage} />
        <NextButton onClick={showNextImage} />
        <Dots
          onSelect={handleSelect}
          activeIndex={imageIndex}
          totalDots={images}
        />
      </div>
    </>
  );
}
