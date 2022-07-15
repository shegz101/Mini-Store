export const get_total = (cartObject) => {
    let get_total_price = cartObject?.reduce((amount, cartItem) => amount + cartItem.price * cartItem.quantity, 0);
    return { get_total_price};
}

//a reducer function takes  two parameters a state and an action
const reducer = (state, action) => {
    //we use the switch operator to define action type - the operator looks our for the various
    //type we defined in our context file
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_CART':
            return {...state, ...get_total(state.cartObject), cartObject: [...state.cartObject, { ...action.payload, quantity:1}]};
        case 'REMOVE_FROM_CART':
            let newCartObject = [...state.cartObject];

            const remove_id = state.cartObject.findIndex((cart) => cart.id === action.id);

            if (remove_id >= 0) {
                //since the em exists in the context - let's splice the whole array
                newCartObject.splice(remove_id, 1);
            }
            return {...state, ...get_total(state.cartObject.filter((cart_item) => cart_item.id !== action.id)), cartObject: newCartObject}
        case 'INCREMENT':
            //here we want to target the particular item and increment the quantity
            const item_id = state.cartObject.findIndex((cart) => cart.id === action.id);
            state.cartObject[item_id].quantity++; 
            return {...state, ...get_total(state.cartObject), cartObject:[...state.cartObject]}
        case 'DECREMENT':
            //here we want to target the particular item and decrement the quantity
            const reduce_id = state.cartObject.findIndex((cart) => cart.id === action.id);
            state.cartObject[reduce_id].quantity--; 
            return {...state, ...get_total(state.cartObject), cartObject:[...state.cartObject]}
        case 'CLEAR':
            return { cartObject: [], ...get_total([]),}
        case 'CHECKOUT':
            return { cartObject: [],check: true, ...get_total([]),}
        default:
            return state
    }
}

export default reducer;