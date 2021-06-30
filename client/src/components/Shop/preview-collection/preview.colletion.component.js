import React from 'react';
// import './preview.collection.scss'
import ItemCollection from  './item-collection/item.colection.component'

import {PreviewCollecttionStyleContainer,PreviewStyled} from './preview.collections.styles'

const PreviewCollection = ({title,items}) => {
    return (
    <PreviewCollecttionStyleContainer>        
        <h1 className='title'>{title.toUpperCase()}</h1>
        <PreviewStyled>
            {
                items
                .filter((x, idx)=> idx < 4 )
                .map((item) => (
                    <ItemCollection key={item.id} item={item} />
                ))
            }
        </PreviewStyled>
    </PreviewCollecttionStyleContainer>
    )

}

export default PreviewCollection