// import React, { useState } from "react";
// import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
// import Products from "./components/Products";
// import Productitems from "./components/Productitems";
// import Header from "./components/Header";
// import Search from "./components/Search";
// import Cart from "./components/Cart";
// import 'fontawesome-free/css/all.min.css';
// import Footer from "./components/Footer";
// import About from "./components/About";
// import ProductDetails from "./components/ProductDetails";
// import Login from "./components/Login";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Home from "./components/Home";

// const App = () => {
//   const [cart, setCart] = useState([]);
//   console.log(cart);
//   return (
//     <BrowserRouter>
//       <ToastContainer />
//       <Header />
//       <MainContent cart={cart} setCart={setCart} />
//     </BrowserRouter>
//   );
// };

// const MainContent = ({ cart, setCart }) => {
//   const location = useLocation();
//   const hideSearchAndHeading = ["/about", "/home", "/cart", "/login"].includes(location.pathname);

//   return (
//     <>
//       {!hideSearchAndHeading && <Search />}
//       {!hideSearchAndHeading && (
//         <div className="heading">
//           <h1>TIMEPIECE GALLERY</h1>
//         </div>
//       )}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Productitems setCart={setCart} cart={cart} />} />
//         <Route path="/productId/:productId" element={<ProductDetails />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//       {location.pathname !== "/login" && <Footer />}
//     </>
//   );
// };

// export default App;

// src/App.js
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Products from './components/Products';
import Productitems from './components/Productitems';
import Header from './components/Header';
import Search from './components/Search';
import Cart from './components/Cart';
import Footer from './components/Footer';
import About from './components/About';
import ProductDetails from './components/ProductDetails';
import Login from './components/Login';
import Home from './components/Home';
import Categories from './components/Categories';
import GenderWatches from './components/GenderWatches'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <MainContent cart={cart} setCart={setCart} />
    </BrowserRouter>
  );
};

const MainContent = ({ cart, setCart }) => {
  const location = useLocation();
  const hideFooterAndHeading = ["/login", "/cart", "/home"].includes(location.pathname);

  return (
    <>
      {!hideFooterAndHeading && (
        <>
          <Search />
          <div className="heading">
            <h1>TIMEPIECE GALLERY</h1>
          </div>
        </>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/watches/:category/:gender" element={<GenderWatches />} /> {/* New route */}
        <Route path="/products" element={<Productitems setCart={setCart} cart={cart} />} />
        <Route path="/productId/:productId" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {!hideFooterAndHeading && <Footer />}
    </>
  );
};

export default App;
