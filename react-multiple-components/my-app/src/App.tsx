import './App.css';
import { RotatingBanner } from './RotatingBanner';

const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

export function App() {
  return (
    <>
      <RotatingBanner items={items} />
    </>
  );
}

export default App;
