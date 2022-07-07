import { createContext, useContext, useReducer } from "react";
import reducer from './reducer';
import { sumItems } from './reducer';

//creating a context object
const Context = createContext();

export const Provider = ({ children }) => {
    //defining the initial state
    const initialState = {
        cartObject: [],
        ...sumItems([]),
        check: false,
    }
    //defining the cart object
    const [state, dispatch] = useReducer(reducer, initialState);
    

    //define the needed logic for the cart
    const addToCart = (payload) => {
        //define the action you want to pass
        dispatch({ type:'ADD_TO_CART', payload })
    } 

    const removeFromCart = (id) => {
        //define the action to pass when we remove from cart
        dispatch({ type:'REMOVE_FROM_CART', id })
    }

    const increment = (id) => {
        dispatch({ type:'INCREMENT', id })
    }

    const decrement = (id) => {
        dispatch({ type:'DECREMENT', id})
    }

    const clearCart = () => {
        dispatch({ type:'CLEAR' })
    }

    const checkOut = () => {
        dispatch({ type:'CHECKOUT' })
    }

    return (
        <Context.Provider value={{
            cartObject: state.cartObject, 
            addToCart,
            removeFromCart,
            increment,
            decrement,
            clearCart,
            checkOut,
            ...state,
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateValue = () => useContext(Context);

export default Context;