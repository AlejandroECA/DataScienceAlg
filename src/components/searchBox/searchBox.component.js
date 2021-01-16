 import React from 'react'
 import {Input} from 'reactstrap'

 import './searchBox.style.css'

export const SearchBox =({placeholder, handleChange})=> {
    return(
        <Input className='search' type='search' placeholder={placeholder} onChange={handleChange} />
                        
    )
}