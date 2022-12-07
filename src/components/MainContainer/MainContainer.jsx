import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import Theme from "../../styles/Theme";
import { BackgroundDashboard } from "../../styles/views/DashboardStyled";
import HeaderDashboard from "../HeaderDashboard";
import MenuDashboard from "../MenuDashboard";
import { Container } from "./MainContainerStyled";

const MainContainer = ({ children }) => {
   const { pathname } = useLocation();
	const [ show, setShow ] = useState(true);

	return (
      <div>
         <Theme>
            <BackgroundDashboard>
               <MenuDashboard show={show} />
               <HeaderDashboard show={show} setShow={setShow} />
               <Container className="MAIN" path={pathname} show={show}>
                  {children}
               </Container>
            </BackgroundDashboard>
         </Theme>
      </div>
   );
};

export default MainContainer;
