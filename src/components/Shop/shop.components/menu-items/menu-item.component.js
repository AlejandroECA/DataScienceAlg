import React from 'react';
import './menu-item.styles.scss'
import {withRouter, Link} from 'react-router-dom'

const MenuItem = ({title,subtitle,imageUrl,size,linkUrl,match,history}) =>{
    return(
        <div className={`${size} menu-item`} 
                onClick={() => {
                    history.push(`${match.url}${linkUrl}`)
                    console.log(history);
                }}>
            <div className='backgrounImage' style={{
                backgroundImage:`url(${imageUrl})`
            }} >
            </div>
            <div className='content'>
 
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>{subtitle}</span>

            </div>
        </div>
    )
}

export default withRouter(MenuItem)