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
    setCurrentIndex((activeIndex) => (activeIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (activeIndex) => (activeIndex - 1 + items.length) % items.length
    );
  };

  function handleSelect(index: number) {
    setCurrentIndex(index);
  }

  return (
    <div className="rotating-banner">
      <Banner items={items[currentIndex]} />

      <div>
        <PrevButton onPrev={handlePrev} />
      </div>

      <Indicators
        items={items}
        currentIndex={currentIndex}
        onSelect={handleSelect}
      />

      <NextButton onNext={handleNext} />
    </div>
  );
}
