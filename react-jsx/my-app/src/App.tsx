import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '../../../../../vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Total Button Clicks: {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        javascript extension that allows developers to write code for dynamic
        dom creation in syntax similar to HTML.
      </p>
      <p className="read-the-docs">
        writing HTML element collections equivalent to javascript code.
        Embedding HTML into the Javascript simplifies the process of building
        self-contained components of functionality.
      </p>
    </>
  );
}

export default App;
