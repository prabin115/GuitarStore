import React, { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import { Link, useNavigate } from 'react-router-dom';
import { PaymentContext } from '../../context/PaymentContext';
import { AuthContext } from '../../context/AuthContext';

const Cart = () => {
    const { cart, removeFromCart, subtotal, total, addToCart, setCart} = useContext(ProductsContext);
    const { paymentStart } = useContext(PaymentContext);
    const { authData } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleCheckout = (total) => {
        if(!authData){
            navigate("/login");
            return;
        }
        paymentStart(total);
    }

    const removeFullFromCart = (productId) => {
        setCart((prev) => prev.filter((item) => item.id !== productId));
    };
    
    if (cart.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-gray-900 mb-4">Your cart is empty</h1>
                    <Link to="/">
                        <button className="px-6 py-2 text-lg font-semibold text-white bg-gray-900 rounded-md transition hover:bg-gray-800">
                            Continue Shopping
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

  return (
    <>
    <section className="min-h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center">
                <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
            </div>

            <div className="mx-auto mt-8 max-w-2xl md:mt-12">
                <div className="bg-white shadow">
                    <div className="px-4 py-6 sm:px-8 sm:py-10">
                        <div className="flow-root">
                            <ul>
                                {cart.map((item, index)=> (
                                    <li key={index} className='my-5'>
                                        <div className='flex'>
                                            <div className="shrink-0">
                                                <img className="h-24 w-24 max-w-full rounded-lg object-contain" src={`http://localhost:8080/file/${item.imageUrl}`} alt={item.name} />
                                            </div>

                                            <div className="relative flex flex-1 flex-col justify-between">
                                                <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                                                    <div className="pr-8 sm:pr-5">
                                                        <p className="text-base font-semibold text-gray-900">
                                                            {item.brand} {item.name}
                                                        </p>
                                                        <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                                                            {item.type}
                                                        </p>
                                                    </div>

                                                    <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                                    <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                                                        ₹ {item.price}
                                                    </p>

                                                    <div className="sm:order-1">
                                                        <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                                            <button onClick={()=> removeFromCart(item.id)} className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                                                                -
                                                            </button>
                                                            <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                                                                {item.quantity}
                                                            </div>
                                                            <button onClick={()=> addToCart(item)} className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                                                                +
                                                            </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                                                    <button onClick={()=>removeFullFromCart(item.id)} type="button" className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                                                    <svg className="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                    </div>

                        {/* calculation */}
                        <div className="mt-6 border-t border-b py-2">
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-400">Subtotal</p>
                                <p className="text-lg font-semibold text-gray-900">₹{subtotal}</p>
                            </div>
                            {/* <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-400">Shipping</p>
                                <p className="text-lg font-semibold text-gray-900">₹120.00</p>
                            </div> */}
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">Total</p>
                            <p className="text-2xl font-semibold text-gray-900"><span className="text-xs font-normal text-gray-400">INR</span> {total}</p>
                        </div>

                        {/* checkout button */}
                        <div className="mt-6 text-center">
                            <button onClick={()=> handleCheckout(total)} type="button" className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                            Checkout
                                <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </div>
                        <div className='flex justify-end'>
                            <Link to="/">
                                <button className='mt-10 text-sm text-blue-600'>Continue shopping...</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Cart