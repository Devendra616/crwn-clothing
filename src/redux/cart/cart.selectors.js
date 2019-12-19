import { createSelector } from 'reselect';

//input selector, returns a slice of state that is reqd
const selectCart = state => state.cart;

export const selectCartItems =  createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumulatedQty, cartItem) => accumulatedQty + cartItem.quantity,
            0
        )
)