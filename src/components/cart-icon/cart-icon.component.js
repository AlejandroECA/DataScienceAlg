import React from 'react';
import {connect} from 'react-redux';

import { toogleCartHidden } from '../../redux/cart/cart.actions'

import './cart-icon.styles.scss'

import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg'

import {selectCartItemsCount} from '../'

const CartIcon = ({toogleCartHidden, itemCount}) =>{
    return(
        <div className='cart-icon' onClick={toogleCartHidden}>
            <ShopingIcon className='shoping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    toogleCartHidden: () => dispatch(toogleCartHidden())
})

const mapStateToProps = ({ cart:{cartItems}}) => ({
    itemCount:cartItems.reduce((accumulatedQuantity, cartItem)=> acumulatedQuantity + cartItem ,0)
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)