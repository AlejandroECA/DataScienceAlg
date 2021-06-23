import React from 'react';
import './preview.collection.scss'
import ItemCollection from  './item-collection/item.colection.component'

const PreviewCollection = ({title,items}) => {
    return (
    <div className='collection-preview'>        
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                .filter((x, idx)=> idx < 4 )
                .map((item) => (
                    <ItemCollection key={item.id} item={item} />
                ))
            }
        </div>
    </div>
    )

}

export default PreviewCollection