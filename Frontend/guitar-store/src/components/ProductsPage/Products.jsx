import React, { useContext, useEffect } from 'react';
import ProductCard from './ProductCard';
import Filters from './Filters';
import { useLocation } from 'react-router-dom';
import { ProductsContext } from '../../context/ProductsContext';

const Products = () => {

  const location = useLocation();
  const { type } = location.state || { type: 'Default Title' };
  const { products, setProducts } = useContext(ProductsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const guitarType = mapTitleToGuitarType(type);

        if (!guitarType) {
          throw new Error('Invalid guitar type');
        }

        const response = await fetch(`http://localhost:8080/guitars/type/${guitarType}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
        // console.log(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };
    fetchData();
  }, [type, setProducts]);

  return (
    <>
      <div className="flex justify-center">
        {/* <div className="mt-20">
          <Filters category={type} />
        </div> */}
        <div className="w-1/2 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;

const mapTitleToGuitarType = (type) => {
  switch (type) {
    case 'Electric Guitars':
      return 'ELECTRIC';
    case 'Acoustic Guitars':
      return 'ACOUSTIC';
    case 'Bass Guitars':
      return 'BASS';
    default:
      return null; // or handle a default case
  }
};
