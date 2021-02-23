import React from 'react';
import './ShopHome.styles.scss'
import Directory from '../shop.components/directory/directory.component'
import DefaulTitle from '../../title/title.component';

const ShopHome = () => {

    return(
        <div className = "shophome">
            <DefaulTitle title={'Shop'} />
            <Directory />
            
        </div>
    )
}

export default ShopHome