// import './Productitem.css';
// import { PRODUCTS } from "../constants";
// import { increment } from '../redux/counterSlice';
// import { increment1 } from '../redux/cartSlice';
// import { useDispatch ,useSelector} from 'react-redux';
// import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import Search from './Search';
// // const Productitems=(props)=>{
// //   const additem=(product)=>{
// //     props.setCart([...props.cart,product]);
// //   };

//  const Productitems=(props)=>{
//   const dispatch=useDispatch();
  
//   const cartItems = useSelector((state) => state.carter.cart);
//   const listItems=useSelector((state)=>state.product.items);

//   const addItem=(product)=>{
//   //   props.setCart([...props.cart,product]);
//   dispatch(increment1(product))
//   toast.success("Item added to cart");
//   };

//   const isInCart = (product) => {
//     return cartItems.some(item => item.id === product.id);
//   };
//     return(
//         <div className="product-item">
//             {listItems.map(product =>(
//                 <div key={product.id} className="productitem">
//                     <img src={product.image} alt={product.title} width="150px" height="190px" />
//                     <Link to={`/productId/${product.id}`} className="product-title-link">
//             <h2>{product.brand}</h2>
//           </Link>
//                <h4>{product.model}</h4>
//                <p>{product.details}</p>
//               <p>Price: $ {product.price}</p>
//               <div className="rating">
//                 <span>Rating: {product.rating.rate}</span>
//                 <span>({product.rating.count} reviews)</span><br></br>
//               </div><br></br>
//               <div>
//         <strong>Color Variants:</strong> {product.features.colorVariants.join(', ')}
//       </div>
//       <div>
//         <strong>Strap Material:</strong> {product.features.strapMaterial}
//       </div>
//       <div>
//         <strong>Water Resistance:</strong> {product.features.waterResistance}
//       </div><br></br>
//       {isInCart(product) ? (
//             <Link to="/cart">
//               <button className="primary-btn">Go To Cart</button>
//             </Link>
//           ) : (
//             <button className="primary-btn" onClick={() => addItem(product)}>Add To Cart</button>
//           )}  
//             </div>
//           ))}
       
//         </div>
//     );
// }
// export default Productitems;



// src/components/Productitems.js
// src/components/Productitems.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { increment1 } from '../redux/cartSlice';
import './Productitem.css';

const Productitems = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.carter.cart);
  const listItems = useSelector((state) => state.product.items);

  const addItem = (product) => {
    dispatch(increment1(product));
    toast.success("Item added to cart");
  };

  const isInCart = (product) => {
    return cartItems.some(item => item.id === product.id);
  };

  return (
    <div className="product-item">
      {listItems.map(product => (
        <div key={product.id} className="productitem">
          <img src={product.image} alt={product.title} width="150px" height="190px" />
          <Link to={`/productId/${product.id}`} className="product-title-link">
            <h2>{product.brand}</h2>
          </Link>
          <h4>{product.model}</h4>
          {/* <p>{product.details}</p> */}
          <p>Price: ${product.price}</p>
          <div className="rating">
            <span>Rating: {product.rating.rate}</span>
            <span> ({product.rating.count} reviews)</span><br />
          </div><br />
          {/* <div>
            <strong>Color Variants:</strong> {product.features.colorVariants.join(', ')}
          </div>
          <div>
            <strong>Strap Material:</strong> {product.features.strapMaterial}
          </div>
          <div>
            <strong>Water Resistance:</strong> {product.features.waterResistance}
          </div><br /> */}
          {isInCart(product) ? (
            <Link to="/cart">
              <button className="primary-btn">Go To Cart</button>
            </Link>
          ) : (
            <button className="primary-btn" onClick={() => addItem(product)}>Add To Cart</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Productitems;
