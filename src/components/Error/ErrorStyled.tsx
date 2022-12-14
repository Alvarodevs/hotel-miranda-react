import styled from "styled-components";

export const ErrorContainer = styled.div`
    background-color: var(--color-black);
    width: 100%;
    height: 100vh;
	position: relative;
`;

export const HomeIcon = styled.div`
   background-color: var(--color-greyB2);
   font-size: 1.5rem;
   width: max-content;
   padding: 15px 15px 10px 15px;
   border-radius: 12px;
   position: absolute;
   top: 3%;
   right: 10%;
	transition: 0.4s;
   :hover {
      background-color: var(--color-white);
   }
`;

export const ErrorImg = styled.img`
    width: 60%;
    margin-left: 20%;
    margin-top: 2%;
`;
