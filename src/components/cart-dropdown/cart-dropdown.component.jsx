import React from 'react';
import {connect} from 'react-redux';

import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {withRouter} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import {toggleCartHidden} from '../../redux/cart/cart.action';
import {CartDropdownContainer, CartItemsContainer,EmptyMessageContainer, CartDropdownButton } from './cart-dropdown.styles';

const CartDropdown = ({cartItems, history, dispatch}) => (
  <CartDropdownContainer>
    <CartItemsContainer >
      { cartItems.length ?
        cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />  
       )) : 
       <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
       }      
    </CartItemsContainer>
    <CartDropdownButton downButton onClick= { () => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
      }}>GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

/* const mapStateToProps = ({ cart: {cartItems}}) => ({
  cartItems
}); */

/* const mapStateToProps = (state) => ({
  cartItems : selectCartItems(state)
}); */

const mapStateToProps = createStructuredSelector({
  cartItems : selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));