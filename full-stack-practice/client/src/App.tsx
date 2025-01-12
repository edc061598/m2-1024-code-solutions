import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ProductDetails } from './components/ProductDetails';
import { Catalog } from './components/Catalog';
import { About } from './components/About';
import { Header } from './components/Header';
import { NotFound } from './components/NotFound';

export function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" index element={<Catalog />} />
            <Route path="products/:productId" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>

    </>
  );
}

export default App;
