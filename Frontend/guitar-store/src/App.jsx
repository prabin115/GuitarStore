
import Cart from './components/Cart/Cart'
import Footer from './components/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Navbar'
import ProductDetails from './components/ProductsPage/ProductDetails'
import Products from './components/ProductsPage/Products'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { ProductsProvider } from './context/ProductsContext'
import { PaymentProvider } from './context/PaymentContext'
import PaymentSuccess from './components/Payment/PaymentSuccess'
import Login from './components/Login & Registration/Login'
import SignUp from './components/Login & Registration/SignUp'
import { AuthProvider } from './context/AuthContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>

      <BrowserRouter>
        <AuthProvider>
          <ProductsProvider>
            <PaymentProvider>
              <Navbar/>
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/cart" element={<Cart/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/signup" element={<SignUp/>}/>
                  <Route path="/products" element={<Products/>}/>
                  <Route path="/payment-success" element={<PaymentSuccess/>}/>
                  <Route path="/product-details" element={<ProductDetails/>}/>
                </Routes>
              <Footer/>
            </PaymentProvider>
          </ProductsProvider>
        </AuthProvider>
        <ToastContainer
          position="top-left"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </BrowserRouter>
    </>
  )
}

export default App
