import React from 'react';
import './customButton.styles.scss'

import {CustomButtonContainer} from './customButton.styles'

const CustomButton = ({children,...props}) => {
    return(
        <CustomButtonContainer {...props}>
            {children}
        </CustomButtonContainer>

    )
}

export default CustomButton