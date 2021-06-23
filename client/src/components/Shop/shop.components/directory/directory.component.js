import React from 'react';
import './directory.styles.scss'
import MenuItem from '../menu-items/menu-item.component'
import {withRouter} from 'react-router-dom'

import {connect} from 'react-redux'

import { selectDirectorySections} from '../../../../redux/directory/directory.selectors'

import {createStructuredSelector} from 'reselect'

const Directory =({sections}) => {

    return(
        <div className='directory-menu'>
            {sections.map(({id,...otherProps}) => (
            <MenuItem key={id} {...otherProps} />
            ))}
        </div>
    )
}
    


const mapStateToProps = createStructuredSelector({ 
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(withRouter(Directory))