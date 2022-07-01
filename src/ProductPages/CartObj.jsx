import React from 'react';
import '../App.css';
import {RiDeleteBin6Line} from 'react-icons/ri';
import { AiFillMinusCircle } from 'react-icons/ai';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { useStateValue } from '../CartPath/CartContext';
const CartObj = ({ product }) => {
    const { removeFromCart,increase,decrease } = useStateValue();
    return ( 
        <div className="cart-body">
            <div className="cart-segment">
                <div className="cart-product">
                    <div className="cart-image">
                       <img className="product-image" src={product.image} height="80px" alt={product.title}/>
                       <p className='product-title'>{product.title}</p>
                       <p onClick={() => removeFromCart(product)} className="delete-icon"><RiDeleteBin6Line/></p>
                    </div>

                    <div className="cart-number">
                        <p>{product.price} X {product.quantity}</p>
                        <p className='product-line'> | </p>
                        <p>{(product.price * product.quantity).toFixed(2)}</p>
                    </div>

                    <div className="cart-value">
                        <button className="minus-icon" onClick={() => decrease(product)}>
                            <AiFillMinusCircle/>
                        </button>
                        <p>{product.quantity}</p>
                        <button className="add-icon" onClick={() => increase(product)}>
                            <BsFillPlusCircleFill/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default CartObj;