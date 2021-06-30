import React from 'react';
import CustomButton from "../../../signInAndOut/custom-button/customButton.component";
// import './item.collection.style.scss'

import { connect } from 'react-redux';

import { addItem } from '../../../../redux/cart/cart.actions'

import {CollectionItemContainer} from './item.collection.styles'

const ItemCollection = ({ item, addItem}) => {
    const {name,price,imageUrl} = item;
    return(
        <CollectionItemContainer>
            <div className='image' style={{backgroundImage: `url(${imageUrl})`}} />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton className='custom-button' inverted onClick={()=> addItem(item)} >Add to cart</CustomButton>
        </CollectionItemContainer>
    )

}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})



export default connect(null,mapDispatchToProps)(ItemCollection)