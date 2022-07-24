export const fetchUser = () =>{
    const userInfo = localStorage.getItem('user') !== "undefined" ? JSON.parse(localStorage.getItem('user')):
    localStorage.clear();
    return userInfo;
};

export const fetchCart = () =>{
    const cartItems = localStorage.getItem('cartItems') !== "undefined" ? JSON.parse(localStorage.getItem('cartItems')):
    localStorage.clear();
    return cartItems ? cartItems: [];
};