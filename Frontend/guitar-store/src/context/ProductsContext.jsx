import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState();
    const [cart, setCart] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const { authData } = useContext(AuthContext);
    const total = subtotal;

    const searchProduct = async (keywords) => {
        try {
            const response = await fetch(`http://localhost:8080/guitars/search?keywords=${encodeURIComponent(keywords)}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            setProducts(data);
            console.log(data);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    useEffect(()=>{
        setSubtotal(cart.reduce((sum, item) => sum + item.price * item.quantity, 0));
    }, [cart])

    const addToCart = (product) => {
        if(!authData){
            toast.warn('User must be logged in to add items to the cart!');
            navigate("/login");
            return;
        }

        setCart((prev) => {
            const existingItem = prev.find((item) => (
                item.id === product.id
            ));

            if(existingItem){
                return prev.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1} : item)
            } else {
                return [...prev, { ...product, quantity: 1}]
            }
        });
        toast.success("Item added to cart");
    };
    
    const removeFromCart = (productId) => {
        setCart((prev) => {
            return prev.map(item => {
                if(item.id === productId){
                    if(item.quantity > 1){
                        return {...item, quantity: item.quantity - 1};
                    } else {
                        return null;
                    }
                }
                return item;
            }).filter(item => item !== null);
        });
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <ProductsContext.Provider value={{ products, setProducts, selectedProduct, setSelectedProduct, cart, setCart, addToCart, removeFromCart, subtotal, total, searchProduct, clearCart }}>
            
            {children}
        </ProductsContext.Provider>
    );
};