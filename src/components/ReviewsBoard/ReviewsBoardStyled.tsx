import styled from "styled-components";



export const ReviewsBoardContainer = styled.div`
   width: 100%;
   padding: 1.5rem;
`;

export const ReviewsDashboardContainer = styled.div`
   background-color: var(--color-white);
   margin-bottom: 1rem;
   padding: 2rem;
   font-family: var(--font-main);
   border-radius: 10px;
   position: relative;
`;

export const Title = styled.h5`
   font-size: 1rem;
   color: var(--color-grey39);
   margin-bottom: 2rem;
`;

export const CardsContainer = styled.div`
   display: flex;
   overflow-x: scroll;
   gap: 1rem;
   
   scrollbar-width: none;
`;

export const ButtonsContainer = styled.div`
   display: flex;
   width: 100%;
   position: absolute;
   padding-right: 3rem;
   z-index: 1;
   justify-content: space-between;
   top: 45%;
   svg{
      color: var(--color-greenLight);
      font-size: 2.5rem;
      cursor: pointer;
   } 
`;
