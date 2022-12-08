import styled from "styled-components";

export const ImageSlider = styled.img`
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   height: 600px;
   background: linear-gradient(180deg, transparent 0%, grey 100%);
`;

export const Container = styled.div`
	position: absolute;
	bottom: 10px;
`;
export const NavigationContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   svg {
      margin: 20px 50px;
      color: var(--color-greyD4);
      border: none;
      background-color: var(--color-greyB2);
      border-radius: 5px;
      :hover {
         color: var(--color-white);
			cursor: pointer;
      }
   }
`;

export const Arrow = styled.div`
 width: 50px;
 color: white;
`;
export const Description = styled.p`
	padding: 5px 15px;
	font-family: var(--font-main);
	color: var(--color-white);
	text-align: center;
`;