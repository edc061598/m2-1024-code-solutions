import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ProductDetails } from './ProductDetails';
import { Catalog } from './Catalog';
import { About } from './About';
import { Header } from './Header';
import { NotFound } from './NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/catalog" index element={<Catalog />} />
          <Route path="details/:productId" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
