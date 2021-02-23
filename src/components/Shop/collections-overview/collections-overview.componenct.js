import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import  PreviewCollection  from '../preview-collection/preview.colletion.component'

import { selectCollectioForpreview } from '../../../redux/shop/shop.selector'

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {collections.map(({id, ...otherProps}) => (
            <PreviewCollection id={id} {...otherProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections:selectCollectioForpreview,
})

export default connect(mapStateToProps)(CollectionsOverview)