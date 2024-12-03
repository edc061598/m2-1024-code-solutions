import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { readProduct, type Product, toDollars } from '../lib';

export function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadProduct(productId: number) {
      try {
        const product = await readProduct(productId);
        setProduct(product);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (productId) {
      setIsLoading(true);
      loadProduct(+productId);
    }
  }, [productId]);

  function handleAddToCart() {
    alert(`Added ${product?.name} to cart`);
    navigate('/');
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    return (
      <div>
        Error Loading Product {productId}:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }
  if (!product) return null;
  const { name, imageUrl, price, shortDescription, longDescription } = product;
  return (
    <div className="container">
      <div className="p-6">
        <div className="flex flex-wrap">
          <div className="flex-grow flex-1 px-4">
            <Link to="/" className="whitespace-no-wrap text-gray-600">
              &lt; Back to catalog
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap mb-4">
          <div className="w-full sm:w-1/2 md:w-2/5 px-4">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-96 object-contain"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-3/5 px-4 my-12">
            <h2 className="font-bold">{name}</h2>
            <h5 className="my-2 text-gray-600">{toDollars(price)}</h5>
            <p>{shortDescription}</p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="flex-grow max-w-full flex-1 px-4">
            <p className="whitespace-pre-wrap">{longDescription}</p>
          </div>
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        className="border border-gray-300 rounded py-1 px-3 mx-10">
        Add to Cart
      </button>
    </div>
  );
}
