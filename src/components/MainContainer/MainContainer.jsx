import React from "react";
import { useLocation } from "react-router-dom";
import Theme from "../../styles/Theme";
import { BackgroundDashboard } from "../../styles/views/DashboardStyled";
import HeaderDashboard from "../HeaderDashboard";
import MenuDashboard from "../MenuDashboard";
import { Container } from "./MainContainerStyled";

const MainContainer = ({ children }) => {
   const { pathname } = useLocation();

   return (
      <div>
         <Theme>
            <BackgroundDashboard>
               <MenuDashboard />
               <HeaderDashboard />
               <Container className="MAIN" path={pathname}>
                  {children}
               </Container>
            </BackgroundDashboard>
         </Theme>
      </div>
   );
};

export default MainContainer;
