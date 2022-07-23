export const actionType = {
    SET_USER : "SET_USER",
    SET_MENU : "SET_MENU",
    SET_CHECKOUT_SHOW : "SET_CHECKOUT_SHOW"
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

        case actionType.SET_CHECKOUT_SHOW:
        return{
            ...state,
            showCheckout : action.showCheckout
        };

        default:
            return{
                ...state
            };
    }
}

export default reducer;