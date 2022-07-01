import { createContext, useContext } from "react";

const CartContext = createContext();

//Local Storage
export const storage = localStorage.getItem("cartObject")
  ? JSON.parse(localStorage.getItem("cartObject"))
  : [];

export const useStateValue = () => useContext(CartContext);

export default CartContext;