import React from 'react';
import { ErrorContainer, ErrorImg } from './ErrorStyled'; 
import error from '../../assets/images/error.gif'
const Error = () => {
 
    return (
        <div>
            <ErrorContainer>
                <ErrorImg src={error} alt='Error gif'/>
            </ErrorContainer>
        </div>
    );
}
 
export default Error;