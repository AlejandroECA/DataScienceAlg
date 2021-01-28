import React from 'react';

import './cart-dropdown.styles.scss';

import { connect } from 'react-redux'

import CustomButtom from '../signInAndOut/custom-button/customButton.component'
import CartItem from '../cart-item/cart-item.component'

import { selectCartItems} from '../../redux/cart/cart.selectors'

import { withRouter } from 'react-router-dom';

const CartDropdown = ({cartItems, history}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
            {
                cartItems.length?
                (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />))
                :
                <span className='empty-message'>Your cart is empty</span>
            }
            </div>
            <CustomButtom onClick={() => history.push('/checkout')}>
                GO TO CHECK OUT
            </CustomButtom>
        </div>
    )
}


//createstructuredselector maybe
const mapStateToProps = (state) =>({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));