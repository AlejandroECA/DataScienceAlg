import React from 'react';

import './cart-dropdown.styles.scss';

import { connect } from 'react-redux'

import CustomButtom from '../signInAndOut/custom-button/customButton.component'
import CartItem from '../cart-item/cart-item.component'


const CartDropdown = ({cartItems}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
            </div>
            <CustomButtom>GO TO CHECK OUT</CustomButtom>
        </div>
    )
}

const mapStateToProps = ({ cart: {cartItems}}) =>({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);