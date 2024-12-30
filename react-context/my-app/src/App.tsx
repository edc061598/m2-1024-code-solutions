import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Catalog } from './pages/Catalog';
import { NotFound } from './pages/NotFound';
import { ProductDetails } from './pages/ProductDetails';
import { useState } from 'react';
import { Product } from './lib';
import { CartContext, CartValue } from './components/CartContext';

export function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  const cartContextValues: CartValue = {
    cart: cart,
    addToCart: addToCart,
  };

  return (
    <CartContext.Provider value={cartContextValues}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Catalog />} />
          <Route path="details/:productId" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </CartContext.Provider>
  );
}
