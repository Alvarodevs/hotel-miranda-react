import styled from "styled-components";

export const ReviewCardContainer = styled.div`
   min-width: 27rem;
   height: 17rem;
   background-color: var(--color-white);
   border-radius: 10px;
   color: var(--color-grey39);
   border: 1px solid var(--color-greyEB);
   padding: 2rem;
   position: relative;
   transition: all 0.3s ease-in-out;
   
   &:hover{
      box-shadow: 0px 16px 30px #00000014;
   }
`;

export const Text = styled.p`
   font-family: var(--font-main);
   font-size: 1rem;
   color: var(--color-grey39);
   
`;

export const DataContainer = styled.div`
   position: absolute;
   display: flex;
   bottom: 2rem;
   width: -webkit-fill-available;
`;

export const Img = styled.img`
   width: 60px;
   height: 60px;
   background-color: var(--color-greyC5);
   border-radius: 10px;
`;

export const NameAndTime = styled.div`
   width: 60%;
   padding-left:1rem;
`;
export const Name = styled.p`
   color: var(--color-black);
   font-weight: 800;
   font-size: 1rem;
   margin: 0.3rem 0;
`;
export const Time = styled.p`
   color: var(--color-greenGrey);
   font-size: 0.8rem;
`;
export const Buttons = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   .check{
      color: var(--color-greenLight);
      font-size: 2rem;
      margin-right: 1rem;
   }
   .delete{
      color: var(--color-red);
      font-size: 2rem;
   }
`;
