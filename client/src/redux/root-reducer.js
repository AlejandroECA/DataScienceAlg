import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from '../redux/user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'
import algListReducer from './algorithmsL/algorithm.reducer'


const persistConfig = {
    key:'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
    algorithms: algListReducer

});

export default persistReducer(persistConfig,rootReducer);