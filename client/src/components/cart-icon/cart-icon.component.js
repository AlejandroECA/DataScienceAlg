import React from 'react';
import {connect} from 'react-redux';

import { toogleCartHidden } from '../../redux/cart/cart.actions'

import './cart-icon.styles.scss'

import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg'

import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

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

//createstructureselector maybe
const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)