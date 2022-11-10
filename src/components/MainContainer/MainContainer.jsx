import React from 'react';
import { useLocation } from 'react-router-dom';
import {Container} from './MainContainerStyled';

const MainContainer = ({children}) => {
const { pathname } = useLocation();

	return (
	   <Container className="MAIN" path={pathname}>{children}</Container>
	)
}
 
export default MainContainer;