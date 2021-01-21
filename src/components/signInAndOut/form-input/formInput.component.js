import React from 'react';

import './formInput.styles.scss'

const FormInput = ({ handleChange, label , ...restOfprops}) => {
    return(
        <div className='group'>
            <input className='form-input' 
            onChange={handleChange} {...restOfprops} />
                {label?
                (<label className={`${
                    restOfprops.value.length ? 'shrink' : ''} 
                form-input-label`}>
                    {label}
                </label>
                ):null
            }
        </div>
    )

}

export default FormInput