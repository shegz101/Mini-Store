import React from "react";
import '../App.css';
import { useStateValue } from "../CartPath/context";

const ProductCard = ({ product }) => {
  const { addToCart,cartObject } = useStateValue();
  //check if an item exists in the cart, return true
  const isInCart = (product) => {
    return !!cartObject.find((item) => item.id === product.id); //this returns a boolean value
  };
    return ( 
        <div className="product-card">
           <p className="cartegory-text">{product.category.toUpperCase()}</p>
           <div className="image-container">
               <img className="product-image"src={product.image} alt=""/>
           </div>
           <div>
               <h2 className="title-text">{product.title}</h2>
               <p className="description-text">{product.description}</p>
           </div>
           <div className="price-text">
             <p>Price: {'$' + product.price}</p>
           </div>
           <div>
              {isInCart(product) && (
                <button className="cart-btn">In Cart</button>
              )}
              {!isInCart(product) && (
                <button onClick={() => {addToCart(product)}} className="cart-button">Add To Cart</button>
              )}  
           </div>
        </div>
     );
}
 
export default ProductCard;