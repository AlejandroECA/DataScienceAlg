import React from 'react';

import DefaulTitle from '../../title/title.component'

import { Route , withRouter} from 'react-router-dom';

import CollectionsOverview from '../collections-overview/collections-overview.componenct'

import CollectionPage from '../shop.components/collection/collection.component'

const ShopList =({match}) => {

    console.log('match',match);

    return(
        <div>
            <DefaulTitle title={'SHOP List'} />
            <div>
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        </div>
    )


}


export default withRouter(ShopList)