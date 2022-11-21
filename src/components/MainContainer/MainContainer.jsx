import React from 'react';
import { useLocation } from 'react-router-dom';
import MenuDashboard from '../MenuDashboard';
import HeaderDashboard from '../HeaderDashboard';
import {Container} from './MainContainerStyled';

const MainContainer = ({children}) => {
const { pathname } = useLocation();

	return (
      <div>
         <MenuDashboard />
         <HeaderDashboard />
         <Container className="MAIN" path={pathname}>
            {children}
         </Container>
      </div>
   );
}
 
export default MainContainer;