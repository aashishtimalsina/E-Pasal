import './App.css';
import Home from './pages/Home/Home';
import Cart from "./pages/Cart/Cart"
// import AllProducts from './components/AllProducts/AllProducts';
import{ BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import {useEffect, useState} from "react";
import Navbar from "../src/components/Navbar/Navbar"
import Footer from "../src/components/Footer/Footer";
import toast,{Toaster} from "react-hot-toast";
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from "./FireBaseAuth/FireBaseAuth";
import SingleProduct from './pages/SingleProduct/SingleProduct';
import About from './pages/AboutUs/About';
import Contact from './pages/Contact/Contact';
import {lazy,Suspense} from "react";
const AllProducts = lazy(() => import('./components/AllProducts/AllProducts'));



function App() {

  const [cart,setCart]=useState([]);
  const [userName,setUserName] =useState("");

  const handleAdd=(id)=>{
   const incQuantity = cart.map((item)=>(
      item.id === id ? {...item,quantity:item.quantity+1} :item 
    ))
    setCart(incQuantity);

  }
  const handleSub=(id)=>{
   const incQuantity = cart.map((item)=>(
      item.id === id && item.quantity > 1 ? {...item,quantity:item.quantity-1} :item 
    ))
    setCart(incQuantity);
  }
  const removeItem = (id)=>{
   const updateByFilter = cart.filter((filterItem)=> filterItem.id !== id)
   setCart(updateByFilter)
  }
  // calculate total
  const getTotal = ()=>{
    const anb = cart.reduce((total,cartReduceItem)=>{
      return total + cartReduceItem.price * cartReduceItem.quantity
    },0)
    return anb;
  }

  const addToCart=(product)=>{
    console.log(product);

    // console.log(cart)
    // setCart([...cart,product]);
    // setCart((prevCart) => [...prevCart,  product]);
  
    const productExist = cart.find((findItem)=>findItem.id === product.id)
    if(productExist){
     const updateCart =  cart.map((item)=>(
        item.id===product.id ? {...item, quantity:item.quantity+1} :  item
      ))
      setCart(updateCart)
      toast.success("Added To Cart Successfully")
      
    }
    else{  
      setCart((prevCart) => [...prevCart, { ...product,quantity:1}]); // Adding quantity to the api as it donot have quantity
    }
    
  }

  // username Display
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName);
      }
      else{
        setUserName("")
      }

    });  
  },[setUserName])

    return (
      <>
      <div>
      <BrowserRouter>
      <Navbar Carter={cart} userName={userName} />
      <Suspense fallback={<div className="text-4xl w-full h-screen  items-center flex  justify-center "><h1 className=''>Loading your items...</h1></div>}>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/cart" element={<Cart cart={cart } addCount={handleAdd} subCount={handleSub} getTotal={getTotal} removeItem={removeItem} />} />  
      <Route path="/allproducts" element={<AllProducts AddToCart={addToCart} />} /> 
       <Route path="/singleproduct/:productid" element={<SingleProduct AddToCart={addToCart} />} /> {/* here productid can be anything buit should match in singleproduct page */}    
      <Route path="/login" element={<Login />} />  
      <Route path="/signUP" element={<Signup />} setUserName={setUserName} />  
     </Routes>
     </Suspense>

     <Toaster />
     <Footer/>
      </BrowserRouter>
       
      </div>
    </>
  )}
export default App
