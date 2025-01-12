import { useEffect, useState } from 'react';
import {type Product } from '../../../server';
import { useParams, Link } from 'react-router-dom';



export function ProductDetails() {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadProduct() {
      const URL = `/api/products/${productId}`;
      try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        setProduct(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadProduct();
  }, [productId]);

  if (isLoading) {
    return <div> Loading product details...</div>;
  }
  if (error) {
    return (
      <div>
        <h1> Error</h1>
        <Link to="/">; Back to Catalog</Link>
      </div>
    );
  }
  if (product) {
    return (
      <>
        <div className="product-details text-left">
          <Link to="/" className="flex items-center text-white">
            &lt; Back to Catalog
          </Link>
        </div>
        <div className="product-header flex flex-wrap">
          <img
            src={product.imageUrl}
            alt={product.name}
            className=" center-left w-1/2"
          />

          <div className="flex flex-col justify-to">
            <h1 className="text-2x1 font-bold ">{product?.name}</h1>

            <p className="text-lg font-semibold text-center">
              <strong>Price:</strong> ${(product.price / 100).toFixed(2)}
            </p>
          </div>
        </div>

        <div className="product-description mt-8">
          <p className="text-white-700 text-lg">{product.longDescription}</p>
        </div>
        <div className="text-left pt-10">
          <button
            onClick={() => alert('Product added to cart')}
            className=" br-50 bc-gray-800 text-white rounded-lg">
            Add to Cart
          </button>
        </div>

        <br />
      </>
    );
  }
}
