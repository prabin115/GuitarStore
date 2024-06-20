import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductsContext } from '../../context/ProductsContext';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const { setSelectedProduct } = useContext(ProductsContext);

    const handleClick = () => {
        setSelectedProduct(product);
        navigate('/product-details');
    }

    return (
        <>
            <div onClick={handleClick} className='flex cursor-pointer space-x-5 justify-center mb-5'>
                <div className="w-60 bg-white items-center overflow-hidden shadow-lg">
                    <div className='flex justify-center mt-5'>
                        <img
                            className="h-64 object-contain transition-transform duration-300 ease-in-out transform hover:scale-110"
                            src={`http://localhost:8080/file/${product.imageUrl}`}
                            alt="Product"
                        />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font text-gray-700 text-md">{product.brand}</div>
                        <div className="font-bold text-gray-900 text-md mb-2">{product.name}</div>
                        <div className="font-bold text-gray-600 text-sm">₹{product.price}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCard;
