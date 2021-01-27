import React from 'react';

import './cart-dropdown.styles.scss';

import CustomButtom from '../signInAndOut/custom-button/customButton.component'

const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'></div>
            <CustomButtom>GO TO CHECK OUT</CustomButtom>
        </div>
    )
}

export default CartDropdown;