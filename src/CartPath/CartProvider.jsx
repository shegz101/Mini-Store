import { useReducer } from "react";
import { storage } from "./CartContext";
import { sumItems } from "./CartReducer";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";


const CartProvider = ({ children }) => {
//The initial State of the Store Object
  const initialState = {
    cartObject: storage,
    ...sumItems(storage),
    checkout: false,
  }

  //Set up the reducer
  const [state, dispatch] = useReducer(CartReducer, initialState);

  //Function to handle when an item is added from the store into the Cart
  const addToCart = (payload) => {
    dispatch({ type: "ADD_TO_CART", payload });
  };

  //Function to handle when an item that is in the cart is added again
  const increase = (payload) => {
    dispatch({ type: "INCREASE", payload });
  };

  //Function to handle when an item is removed from the cart
  const decrease = (payload) => {
    dispatch({ type: "DECREASE", payload });
  };

  //Function to remove an item from the cart
  const removeFromCart = (payload) => {
    dispatch({ type: "REMOVE_FROM_CART", payload });
  };

  //Function to clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  //Function to handle when the user clicks the checkout button
  const handleCheckout = () => {
    dispatch({ type: "CHECKOUT" });
  };

  return (
    <CartContext.Provider value={{
       addToCart,
       removeFromCart,
       increase,
       decrease,
       handleCheckout,
       clearCart,
       ...state,
    }}>
       { children }
    </CartContext.Provider>
  )
}

export default CartProvider;