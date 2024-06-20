import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "./ProductsContext";

export const PaymentContext = createContext();

export const PaymentProvider = ({children}) => {

    const navigate = useNavigate();
    const { clearCart } = useContext(ProductsContext);

    const paymentStart = async (total) => {
        console.log("Payment Started");
        const amt = total;

        try {
            const response = await fetch("http://localhost:8080/payment/create_order",{
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({amount: amt})
            })

            if(!response.ok){
                console.log("Network response was not ok");
                return;
            }

            const orderData = await response.json();
            console.log(orderData);

            if(orderData.status === 'created'){
                const options = {
                    "key": "rzp_test_vdWYK6IB8aPSel", // Enter the Key ID generated from the Dashboard
                    "amount": orderData.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                    "currency": orderData.currency,
                    "name": "Guitar Shop", //your business name
                    "description": "Test Transaction",
                    "image": "https://example.com/your_logo",
                    "order_id": orderData.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    
                    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                        "name": "", //your customer's name
                        "email": "",
                        "contact": "" //Provide the customer's phone number for better conversion rates 
                    },
                    "notes": {
                        "address": "Razorpay Corporate Office"
                    },
                    "theme": {
                        "color": "#3399cc"
                    },
                    handler: function(response){
                        console.log(response);
                        clearCart();
                        navigate('/payment-success')
                    }
                }
                
                const rzp1 = new Razorpay(options);
                rzp1.open();
            }

        } catch (error) {
            console.log(error);
        }
    }

    return(
        <PaymentContext.Provider value={{ paymentStart }}>
            {children}
        </PaymentContext.Provider>
    )
}