// import SHOP_DATA from '../../components/Shop/DATA/shopData'
import ShopActionsTypes from './shop.types'


const INITIAL_STATE = {
    collections: null
    // collections: SHOP_DATA
};

const shopReducer = ( state=INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionsTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default: 
            return state;
    }
}

export default shopReducer