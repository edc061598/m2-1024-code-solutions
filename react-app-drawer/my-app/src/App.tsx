import { AppDrawer, MenuItem } from './components/AppDrawer';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './pages/About';
import { Catalog } from './pages/Catalog';
import { NotFound } from './pages/NotFound';
import { ProductDetails } from './pages/ProductDetails';

export function App() {
  const menuItems: MenuItem[] = [
    { name: 'About', iconUrl: '/hylian-emblem.svg', path: '/about' },
    { name: 'Catalog', iconUrl: '/catalog.png', path: '/' },
  ];
  return (
    <Routes>
      <Route path="/" element={<AppDrawer menuItems={menuItems} />}>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Catalog />} />
        <Route path="/details/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
