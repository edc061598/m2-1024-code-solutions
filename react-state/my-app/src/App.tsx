import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText = 'React Image Bank';
const imagesSrc = [
  'mugetsu.jpg',
  '/starry-sky.jpeg',
  '/blue_eyes_white_dragon__anime__by_holycrapwhitedragon-db48lo4.jpg',
];
const captions = ['Mugetsu', 'Starry sky photo', 'Blue Eyes White Dragon'];
const imageDescrip = [
  'Ichigo with his newest form',
  'Starry Sky was created by Van Gogh.',
  'This legendary monster was wielded by Seto Kaiba',
];
const buttonLabel = 'Click for Next Image';

export default function App() {
  return (
    <>
      <Header text={headerText} />
      <ImageContainer src={imagesSrc} />
      <ImageCaption captions={captions} />
      <ImageDescription descriptions={imageDescrip} />
      <ButtonContainer label={buttonLabel} />
    </>
  );
}
