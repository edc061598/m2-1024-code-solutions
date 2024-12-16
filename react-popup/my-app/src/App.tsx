import { useState, useRef } from 'react';
import './App.css';
import { Popup } from './Popup';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const buttonRef = useRef(null);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="App">
        <button type="button" onClick={toggleMenu} ref={buttonRef}>
          {isOpen ? 'Close' : 'Pop up!'}
        </button>

        <Popup
          isOpen={isOpen}
          positionTo={buttonRef.current}
          onClose={closeMenu}
          opacity={0.7}>
          <ul className="menu">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </Popup>
      </div>
    </>
  );
}

export default App;
