// import React from 'react';
// import {useSelector} from "react-redux";
// import '../assets/images/image.png';
// import {Link} from 'react-router-dom';

// const Header=(props)=> {
//     console.log("props=>",props)
//      const count =useSelector((state)=>state.counter.count);
//      const cart =useSelector((state)=>state.carter.cart);
//   return (
//     <div>
//     <header>
      
//     {/* <div className="time">TimeUp</div> */}
//     <img src="\src\assets\images\image.png" width="40" height="30" alt="logo" />
//     <h><b>     Time Trek</b></h>
//     <nav>
//     <Link to="/">Home</Link>
//     <Link to="/products">Products</Link>
//     <Link to="/categories">Categories</Link> 
//     <Link to="/about">About</Link>
//         <Link to="/cart">Cart:{cart.length}</Link>
//         <Link to='/login'>Login</Link>
//     </nav>
    
//     </header>
    
// </div>

//   )
// }
// export default Header;


// src/components/Header.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Productitem.css'; // Ensure to create this CSS file

const Header = (props) => {
  console.log("props=>", props);
  const cart = useSelector((state) => state.carter.cart);

  return (
    <header className="header1">
      <div className="logo">
        <img src="/src/assets/images/image.png" width="40" height="30" alt="logo" />
        <h1>Time Trek</h1>
      </div>
      <nav className="menu-bar">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart: {cart.length}</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
