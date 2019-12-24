import { removeItem } from "./cart.action";

// Add cartItemToAdd to existing cartItems
export const addItemToCart = (cartItems, cartItemToAdd) => {
   const existingCartItem = cartItems.find(
            cartItem => cartItem.id === cartItemToAdd.id
       );

    if(existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
            )
    }

    return [...cartItems, {...cartItemToAdd, quantity:1}];

}

//Remove cartItemToRemove from existing cartItems
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );
    //clear item if only 1 left and reducing
    if(existingCartItem.quantity === 1) {
        return cartItems.filter(
            cartItem => cartItem.id !== cartItemToRemove.id        
        )
    } 

    //if more than one item left and reducing
    return cartItems.map(cartItem => 
        cartItem.id === cartItemToRemove.id?
        {...cartItem, quantity: cartItem.quantity-1}
        : cartItem
    )
}