import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';
import { About } from './pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/dash" index element={<Dashboard />} />
        <Route path="/details/:itemId" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
