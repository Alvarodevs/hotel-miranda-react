import React from 'react';
import {Container} from './MainContainerStyled';

const MainContainer = ({children}) => {
 
	return (
	   <Container>{children}</Container>
	)
}
 
export default MainContainer;