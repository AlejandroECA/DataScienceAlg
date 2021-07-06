import React , { Profiler } from 'react';
import Directory from '../shop.components/directory/directory.component'
import DefaulTitle from '../../title/title.component';

import {HomeShopContainer} from './shopHome.styles'

const ShopHome = () => {

    // throw Error

    //  Testing component --- Profiler


    return(
        <HomeShopContainer>

            <DefaulTitle title={'Shop'} />

            
            <Profiler id="Directory" onRender={(id,phase,actualDuration) => {
                console.log({
                    id,phase,actualDuration
                });
            }}>
                <Directory />
            </Profiler>
            
        </HomeShopContainer>
    )
}

export default ShopHome