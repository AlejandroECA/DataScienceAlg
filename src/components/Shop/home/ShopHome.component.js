import React from 'react';
import Directory from '../shop.components/directory/directory.component'
import DefaulTitle from '../../title/title.component';

import {HomeShopContainer} from './shopHome.styles'

const ShopHome = () => {

    return(
        <HomeShopContainer>

            <DefaulTitle title={'Shop'} />
            <Directory />
            
        </HomeShopContainer>
    )
}

export default ShopHome