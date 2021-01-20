import React from 'react';
import './menu-item.styles.scss'
import {withRouter, Link} from 'react-router-dom'

const MenuItem = ({title,subtitle,imageUrl,size, history, match}) =>{
    return(
        <div className={`${size} menu-item`} >
            <div className='backgrounImage' style={{
                backgroundImage:`url(${imageUrl})`
            }} >
            </div>
            <div className='content'>
                <Link to={`/${title}`}>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>{subtitle}</span>
                </Link>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)