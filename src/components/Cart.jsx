import React, { useMemo } from 'react';
import './Productitem.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment1, addItem, decrement1,removeItem } from '../redux/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  
  const handleIncrement = (item) => {
    dispatch(addItem(item));
  };

  const handleDecrement = (item) => {
    dispatch(decrement1(item));
  };
  const handleRemove = (item) => {
    dispatch(removeItem(item.id));
  };



  const cartItems = useSelector((state) => state.carter.cart);
  const deliveryFee = 5; // Define a fixed delivery fee

  const { total, totalQuantity } = useMemo(() => {
    let sum = 0;
    let quantitySum = 0;
    cartItems.forEach((item) => {
      sum += item.price * item.quantity;
      quantitySum += item.quantity;
    });
    return { total: sum, totalQuantity: quantitySum };
  }, [cartItems]);
  const totalWithDelivery = total + deliveryFee; // Calculate total with delivery fee

  if (cartItems.length === 0) {
    return <h1>Cart is Empty</h1>;
  }

  return (
    <div className='cart-container'>
      <div className='left-container'>
        {cartItems.map((item) => (
          <div className="cart-items-card" key={item.id}>
            <img src={item.image} alt={item.title} width={50} />
            <div>
              <div>{item.brand}</div>
              <div className="quantity-container">
                <button onClick={() => handleDecrement(item)}>-</button>
                {item.quantity}
                <button onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div>${item.price}</div>
              <button className="remove-button" onClick={() => handleRemove(item)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className='right-container'>
        <div className='header'>Price Details</div>
        <hr className='hline' />
        <div className='subtotal'>Subtotal: ${total.toFixed(2)}</div>
        <div className='itemscount'>Items Count: {totalQuantity}</div>
        <div className='deliveryfee'>Delivery Fee: ${deliveryFee.toFixed(2)}</div>
        <div className='total'>Total: ${totalWithDelivery.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Cart; 