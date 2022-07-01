//This is where the logic of the data layer resides

//everything inside the data layer is referred to as State
//action-example the logic to add something to the cart
export const sumItems = (cartObject) => {
    Storage(cartObject);
    let itemCount = cartObject.reduce(
      (total, product) => total + product.quantity,
      0
    );
    let total = cartObject
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2);
    return { itemCount, total };
};

const Storage = (cartObject) => {
    localStorage.setItem(
      "cartObject",
      JSON.stringify(cartObject.length > 0 ? cartObject : [])
    );
};
//a reducer function takes  two parameters a state and an action
const CartReducer  = (state, action) => {
    //the big switch Loop taking action as parameter with a type method
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_CART':
            if (!state.cartObject.find((item) => item.id === action.payload.id)) {
              state.cartObject.push({
                ...action.payload,
                quantity: 1,
              });
            }
      
            return {
              ...state,
              ...sumItems(state.cartObject),
              cartItems: [...state.cartObject],
            };
      
          // If the action type is REMOVE_ITEM, we want to remove the item from the cartItems array
        case 'REMOVE_FROM_CART':
            return {
              ...state,
              ...sumItems(
                state.cartObject.filter((item) => item.id !== action.payload.id)
              ),
              cartObject: [
                ...state.cartObject.filter((item) => item.id !== action.payload.id),
              ],
            };
      
        // If the action type is INCREASE, we want to increase the quantity of the particular item in the cartItems array
        case 'INCREASE':
            state.cartObject[
              state.cartObject.findIndex((item) => item.id === action.payload.id)
            ].quantity++;
            return {
              ...state,
              ...sumItems(state.cartObject),
              cartObject: [...state.cartObject],
            };
      
        // If the action type is DECREASE, we want to decrease the quantity of the particular item in the cartItems array
        case 'DECREASE':
            state.cartObject[
              state.cartObject.findIndex((item) => item.id === action.payload.id)
            ].quantity--;
            return {
              ...state,
              ...sumItems(state.Object),
              cartObject: [...state.cartObject],
            };
      
        // If the action type is CHECKOUT, we want to clear the cartItems array and set the checkout to true
        case 'CHECKOUT':
            return {
              cartObject: [],
              checkout: true,
              ...sumItems([]),
            };
      
        //If the action type is CLEAR, we want to clear the cartItems array
        case 'CLEAR':
            return {
              cartObject: [],
              ...sumItems([]),
            };
        default:
            return state;
    }
}

export default CartReducer;