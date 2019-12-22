import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import {ReactComponent as Logo } from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.util';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import {createStructuredSelector} from 'reselect';
import { selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser } from '../../redux/user/user.selectors';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            {
                currentUser ?
                <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signIn'>SIGN IN</Link>
            }
            <CartIcon />
        </div> 
        {hidden ? null : <CartDropdown />}   
    </div>
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