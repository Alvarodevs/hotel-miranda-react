import React from 'react';
import { ErrorContainer, ErrorImg, HomeIcon } from './ErrorStyled'; 
import error from '../../assets/images/error.gif';
import {GrHomeRounded} from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Error = () :JSX.Element => {
 
    return (
        <div>
            <ErrorContainer>
                <ErrorImg src={error} alt="Error gif" />
                <Link to={"/"}>
                    <HomeIcon>
                        <GrHomeRounded />
                    </HomeIcon>
                </Link>
            </ErrorContainer>
        </div>
    );
}
 
export default Error;