import React from 'react';

import {HeaderContainer, LogoContainer, OptionsContainer, OptionContainerLink} from './header.styles';
import {ReactComponent as Logo } from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.util';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import {createStructuredSelector} from 'reselect';
import { selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser } from '../../redux/user/user.selectors';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionContainerLink to='/shop'>SHOP</OptionContainerLink>
            <OptionContainerLink to='/contact'>CONTACT</OptionContainerLink>
            {
                currentUser ?
                <OptionContainerLink as='div' onClick={()=> auth.signOut()}>SIGN OUT</OptionContainerLink>
                :
                <OptionContainerLink to='/signIn'>SIGN IN</OptionContainerLink>
            }
            <CartIcon />
        </OptionsContainer> 
        {hidden ? null : <CartDropdown />}   
    </HeaderContainer>
);

//state here is top level root reducer 
/* const mapStateToProps = ({user:{currentUser}, cart: {hidden}}) => ({
    currentUser, hidden
}); */
/* 
const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state), 
    hidden:selectCartHidden(state)
}); */

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser, 
    hidden:selectCartHidden
});

export default connect(mapStateToProps)(Header);