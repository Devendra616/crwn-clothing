import React from 'react';

import {GroupContainer, formInputContainer, formInputLabel} from './form-input.styles';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <GroupContainer>
        <formInputContainer onChange={handleChange} {...otherProps}/>
        {
            label ?
             ( <formInputLabel className={otherProps.value.length ? 'shrink':''} >
                {label} 
             </formInputLabel> )                
             : null
        }
    </GroupContainer>
);

export default FormInput;