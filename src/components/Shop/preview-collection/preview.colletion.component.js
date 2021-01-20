import React from 'react';
import './preview.collection.scss'

const PreviewCollection = ({title,items}) => {
    return (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.map( x => (
                    <div key={x.id}>{x.name}</div>
                ))
            }
        </div>
    </div>
    )

}

export default PreviewCollection