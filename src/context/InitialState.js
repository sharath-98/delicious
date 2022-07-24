import { fetchCart, fetchUser } from "../utils/getLocalStorage"

const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initialState = {
    user: userInfo,
    menu: null,
    showCheckout: false,
    cartItems: cartInfo,
    total:0
}
