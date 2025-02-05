import { Link } from 'react-router-dom';
import { type Product } from '../../../server';
import { useEffect, useState } from 'react';

export function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadProduct() {
      const URL = '/api/products';
      try {
        const response = await fetch(URL);
        console.log(response);
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error || 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    }
    loadProduct();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <div className="catalog text-left">
      <h1>Catalog</h1>
      <div className="product-grid grid grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.productId} className="bg-white p-4 w-full h-full ">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

type CardProps = {
  product: Product;
};

function ProductCard({ product }: CardProps) {
  return (
    <div className="product-card">
      <Link
        to={`/products/${product.productId}`}
        className="block cursor-pointer text-gray-900 rounded border border-gray-300 mb-4 ">
        <div className="w-64 h-64 bg-gray-200 mb-4  overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="object-cover w-100 h-100"
          />
        </div>
        <h5 className="font-bold mb-3">{product.name}</h5>
        <p className="text-xl text-center mb-2">
          ${(product.price / 100).toFixed(2)}
        </p>
        <p className="text-sm text-center"> {product.shortDescription}</p>
      </Link>
    </div>
  );
}
