import React from 'react';
import { useLocation } from 'react-router';
import {HeaderContainer} from './HeaderDashbStyled'

const HeaderDashboard = () => {
	const {pathname} = useLocation();

	return (
	   <HeaderContainer path={pathname}> HeaderContainer</HeaderContainer>
	)
}
 
export default HeaderDashboard;