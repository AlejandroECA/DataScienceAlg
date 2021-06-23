import React, { useEffect } from 'react';
import './collection.styles.scss'
import { connect } from 'react-redux'
import {selectCollection} from '../../../../redux/shop/shop.selector'
import ItemCollection from '../../../Shop/preview-collection/item-collection/item.colection.component'
import { firestore} from '../../../../firebase/firebase.utils'

const CollectionPage = ({collection}) => {


    // if i need a will unmount using a clean up function
    // useEffect(()=>{
    //     console.log('I am subscribing');
    //     const unsubscribeFromCollections = firestore
    //     .collection('collections')
    //     .onSnapshot(snapshot => console.log(snapshot))
    //     return() => {
    //         console.log('I am unsubscribing');
    //         unsubscribeFromCollections()
    //     }
    // },[])

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