const { default: styled } = require("styled-components");

export const ErrorContainer = styled.div`
    background-color: var(--color-black);
    width: 100%;
    height: 100vh;
	position: relative;
`;

export const HomeIcon = styled.div`
   background-color: var(--color-white);
   font-size: 1.5rem;
   width: max-content;
   padding: 13px 12px 10px 12px;
   border-radius: 12px;
   position: absolute;
   top: 3%;
   right: 10%;
`;

export const ErrorImg = styled.img`
    width: 60%;
    margin-left: 20%;
    margin-top: 2%;
`;
