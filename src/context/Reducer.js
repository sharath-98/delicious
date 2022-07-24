export const actionType = {
    SET_USER : "SET_USER",
    SET_MENU : "SET_MENU",
    SET_CHECKOUT_SHOW : "SET_CHECKOUT_SHOW",
    SET_CART_ITEMS : "SET_CART_ITEMS",
    SET_TOTAL : "SET_TOTAL",
    REMOVE_ALL:"REMOVE_ALL"
}

const reducer = (state, action) =>{
    console.log(action);
    switch(action.type)
    {
        case actionType.SET_USER:
            return{
                ...state,
                user : action.user
            };
        
        case actionType.SET_MENU:
        return{
            ...state,
            menu : action.menu
        };

        case actionType.SET_TOTAL:
        return{
            ...state,
            total : action.total
        };

        case actionType.REMOVE_ALL:
        return{
            ...state,
            cartItems : action.cartItems
        };

        case actionType.SET_CHECKOUT_SHOW:
        return{
            ...state,
            showCheckout : action.showCheckout
        };

        case actionType.SET_CART_ITEMS:
        return{
            ...state,
            cartItems : action.cartItems
        };

        default:
            return{
                ...state
            };
    }
}

export default reducer;