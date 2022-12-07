import styled from "styled-components";
import { handleShow } from "../../utils/handleShow";

export const HeaderContainer = styled.div`
   width: 100%;
   height: 5rem;
   padding: 25px 40px 25px 20%;
   background-color: var(--color-white);
   box-shadow: 0px 3px 10px var(--color-grey05);
   display: ${({ path }) => handleShow(path)};
   align-items: center;
   justify-content: space-between;
   transition: 0.8s ease-in-out;
   ${({ show }) =>
      !show
         ? `
		padding: 25px 40px 25px 5%;
		`
         : `
		padding: 25px 40px 25px 20%;
		`};
`;

export const TitleContainer = styled.div`
   display: flex;
   align-items: center;
`;

export const Logo = styled.div`
   width: 1.1rem;
   display: inline-block;
   cursor: pointer;
   svg {
      width: 100%;
   }
`;

export const Site = styled.h3`
   font-family: var(--font-main);
   display: inline-block;
   font-size: 28px;
   color: var(--color-grey26);
   padding-left: 20px;
`;

export const IconsContainer = styled.div`
   display: flex;
   padding-left: 1rem;
   svg {
      font-size: 1.4rem;
      margin: auto 0px auto 30px;
      color: var(--color-greenDark);
      vertical-align: middle;
   }
`;

export const LanguageSelect = styled.select`
   width: 3rem;
   border: none;
   font-family: var(--font-main);
   color: var(--color-greenDark);
   font-weight: 600;
   margin-left: 2rem;
   option {
      color: var(--color-red);
      font-weight: 600;
   }
`;
