// export const all_total = (cartObject) => {
//     let get_total_price = cartObject?.reduce((amount, cartItem) => cartItem.price + amount, 0);
//     return {get_total_price};
// }
export const sumObject = (cartObject) => {
    let total_item = cartObject?.reduce(
      (total, product) => total + product.quantity,
      0
    );
    let total_price = cartObject?.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return { total_item, total_price };
};
//a reducer function takes  two parameters a state and an action
const reducer = (state, action) => {
    //we use the switch operator to define action type - th operator looks our for the various
    //type we defined in our context file
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_CART':
            state.cartObject.push({...action.payload, quantity:1});
            return {...state, ...sumObject(state.cartObject), cartObject: [ ...state.cartObject ]};
        case 'REMOVE_FROM_CART':
            let newCartObject = [...state.cartObject];

            const remove_id = state.cartObject.findIndex((cart) => cart.id === action.id);

            if (remove_id >= 0) {
                //since the em exists in the context - let's splice the whole array
                newCartObject.splice(remove_id, 1);
            }
            return {...state, ...sumObject(state.cartObject.filter((item) => item.id !== action.id)), cartObject: newCartObject}
        case 'INCREMENT':
            //here we want to target the particular item and increment the quantity
            const item_id = state.cartObject.findIndex((cart) => cart.id === action.id);
            state.cartObject[item_id].quantity++; 
            return {...state, ...sumObject(state.cartObject), cartObject:[...state.cartObject]}
        case 'DECREMENT':
            //here we want to target the particular item and decrement the quantity
            const reduce_id = state.cartObject.findIndex((cart) => cart.id === action.id);
            state.cartObject[reduce_id].quantity--; 
            return {...state, ...sumObject(state.cartObject), cartObject:[...state.cartObject]}
        case 'CLEAR':
            return { cartObject: [], ...sumObject([]),}
        case 'CHECKOUT':
            return { cartObject: [],check: true, ...sumObject([]),}
        default:
            return state
    }
}

export default reducer;