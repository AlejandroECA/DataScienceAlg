import React from 'react';


import { connect } from 'react-redux'

import CustomButtom from '../signInAndOut/custom-button/customButton.component'
import CartItem from '../cart-item/cart-item.component'

import { selectCartItems} from '../../redux/cart/cart.selectors'

import { withRouter } from 'react-router-dom';

import { toogleCartHidden } from '../../redux/cart/cart.actions'

import { DropDown,EmptyMessage,CartItems } from './cart-dropdown.styles'

const CartDropdown = ({cartItems, history, dispatch }) => {
    return (
        <DropDown>
            <CartItems>
            {
                cartItems.length?
                (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />))
                :
                <EmptyMessage>Your cart is empty</EmptyMessage>
            }
            </CartItems>
            <CustomButtom onClick={() => {
                history.push('/checkout');
                dispatch(toogleCartHidden())
            }}>
                GO TO CHECK OUT
            </CustomButtom>
        </DropDown>
    )
}


//createstructuredselector maybe
const mapStateToProps = (state) =>({
    cartItems: selectCartItems(state)
})

// const mapDispatchToProps = dispatch = {
//     ... short style: 
//    why? 
//    1 just one dispatch 
//    2 connect add dispatch to the component as a default props
// }

export default withRouter(connect(mapStateToProps)(CartDropdown));