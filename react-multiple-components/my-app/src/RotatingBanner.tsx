import { useState } from 'react';
import { Banner } from './Banner';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';
import { Indicators } from './Indicators';
type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1) % items.length);
  };

  function handleSelect(index: number) {
    setCurrentIndex(index);
  }

  return (
    <div className="rotating-banner">
      <Banner items={items[currentIndex]} />
      <NextButton onNext={handleNext} />
      <PrevButton onPrev={handlePrev} />
      <Indicators
        items={items}
        currentIndex={currentIndex}
        onSelect={handleSelect}
      />
    </div>
  );
}
