import React, { useContext} from 'react';
import { ProductsContext } from '../../context/ProductsContext';

const ProductDetails = () => {
  const { selectedProduct, addToCart } = useContext(ProductsContext);

  if (!selectedProduct) {
    return <div>No Product details available</div>;
  }

  const handleCart = (product) => {
    addToCart(product);
  };

  return (
    <>
      <div className="flex justify-evenly items-center bg-white pt-5">
        <div className="text-center">
          <img
            className="object-contain w-96 h-96 mb-8"
            src={`http://localhost:8080/file/${selectedProduct.imageUrl}`}
            alt={selectedProduct.name}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-4 font-semibold text-3xl">₹ {selectedProduct.price}</h1>
          <button
            type="button"
            className="focus:outline-none h-10 w-40 text-white bg-black hover:bg-white hover:text-black hover:border-black hover:border-2 rounded-full font-medium text-sm transition duration-300 ease-in-out active:bg-gray-700 active:text-white active:border-gray-700 mb-3"
            onClick={()=>handleCart(selectedProduct)}
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="text-center text-white">
        <h1 className="text-4xl mt-5">{selectedProduct.brand}</h1>
        <h1 className="text-2xl pb-10">{selectedProduct.name}</h1>
        <p className="w-1/2 mx-auto">{selectedProduct.description}</p>
      </div>

      <div className="text-white mb-20">
        <h1 className="text-center text-4xl py-10">Highlights</h1>
        <div className="w-1/2 mx-auto">
          <ul className="list-disc text-left">
            {selectedProduct.highlights &&
              selectedProduct.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
