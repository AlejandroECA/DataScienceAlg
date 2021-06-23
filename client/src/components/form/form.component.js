import React from 'react';
import { FormGroup, Label, Input} from 'reactstrap'



export const ReusableForm =({id,placeholder,changueHandler}) => {
    return(
        <>
            <FormGroup>
                <Label htmlFor="{id}">{placeholder}</Label>
                <Input type="text" id={id} name={id} placeholder={placeholder} onChange={changueHandler} required/>
            </FormGroup>
        </>
    )
}