import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import CartObj from './CartObj';
import { useStateValue } from '../CartPath/CartContext';

const Cart = () => {
    const { cartObject, handleCheckout, checkout, itemCount, total, clearCart } = useStateValue();
    return (
        <div className="cart-section">
            <div className='cart-header'>
                <p className='cart-description'>Cart Section</p>
                <p onClick={() => clearCart()} className='clear-cart'>Clear Cart</p>
            </div>

            <div className='cart-head'>
                <p className='total-item'>Total Items: { itemCount }</p>
                <p className='total-price'>Total Price: { '$' + total }</p>
                <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
            </div>

            {
                checkout && (
                    <div className='empty-cart'>
                        <h1>Thank you for patronizing us!</h1>
                        <p>Your order will get to you shortly</p>
                        <Link to="/">
                           <p onClick={clearCart}>Back to store</p>
                        </Link>
                    </div>  
                )
            }

            {
                //If cart is empty display cart is empty, else display items added to cart
                <>
                    {
                        cartObject.length === 0  ? (
                            <h2 className='empty-cart'>Cart is Empty! Add Item</h2>
                        ) : (
                            <div className="cart-container">
                                {cartObject.map((product) => (
                                    <CartObj key={product.id} product={product}/>
                                ))}
                            </div>
                        )
                    }
                </>
            }
        </div>
    )
}

export default Cart;