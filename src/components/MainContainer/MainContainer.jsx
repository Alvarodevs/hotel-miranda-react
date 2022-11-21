import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useLocation } from "react-router-dom";
import { Container } from "./MainContainerStyled";

const MainContainer = ({ children }) => {
   const { pathname } = useLocation();

   return (
      <div>
         {/* <DndProvider backend={HTML5Backend}> */}
            <Container className="MAIN" path={pathname}>
               {children}
            </Container>
         {/* </DndProvider> */}
      </div>
   );
};

export default MainContainer;
