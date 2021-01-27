import CartActionTypes from './cart.type'

export const toogleCartHidden = () => ({
    type:CartActionTypes.TOOGLE_CART_HIDDEN,
    payload:''
})

export const addItem = item =>({
    type:CartActionTypes.ADD_ITEM,
    payload: item
})