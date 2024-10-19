import { useState } from 'react'
import './App.css'
import { ToggleSwitch } from './ToggleSwitch';

export function App() {
 const [label, setLabel] = useState(false);

  function handleClick(){
    setLabel(!label);
  }
  return (
    <ToggleSwitch onClick={handleClick} isOn={label}
    />
  )
}

export default App;
