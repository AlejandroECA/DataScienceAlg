import React from 'react';
import './collection.styles.scss'
import { connect } from 'react-redux'
import {selectCollection} from '../../../../redux/shop/shop.selector'
import ItemCollection from '../../../Shop/preview-collection/item-collection/item.colection.component'

const CollectionPage = ({collection}) => {

    const {title, items} = collection;

    console.log('in collection');
    console.log('title',title);
    console.log('items',items);
    console.log('collection',collection);


    return(
    <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {
                items.map(item => 
                    (<ItemCollection 
                    key={item.id} 
                    item={item} />
                    ))
            }
        </div>
    </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)