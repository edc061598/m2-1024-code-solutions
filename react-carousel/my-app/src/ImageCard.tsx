import React from 'react';
import './ImageCard.css';
type Props = {
  imageSrc: string;
  alt: string;
};

export function ImageCard({ imageSrc, alt }: Props) {
  return (
    <div className="image-slider">
      <img src={imageSrc} alt={alt} />
    </div>
  );
}
