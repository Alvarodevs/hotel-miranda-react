import styled from "styled-components";

export const KPIContainer = styled.div`
   padding: 20px;
   display: flex;
   justify-content: space-between;
`;

export const IconContainer = styled.div`
   border-radius: 8px;
   background-color: var(--color-pinkPale);
`;

export const Icon = styled.div`
   font-size: 30px;
   color: var(--color-red);
   padding: 30px;
   position: relative;
   svg {
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 25%;
   }
`;

export const KPICard = styled.div`
   background-color: var(--color-white);
   border-radius: 12px;
   color: var(--color-grey39);
   display: flex;
   align-items: center;
   gap: 10px;
   padding: 30px;
   width: max-content;

   :hover {
      box-shadow: 0px 16px 30px #00000014;

      ${IconContainer} {
         background-color: var(--color-red);
         .icon {
            transition: 0.6s;
            color: var(--color-white);
         }
      }
   }
`;

export const InfoContainer = styled.div``;

export const Amount = styled.h4`
   color: var(--color-black);
   font-family: var(--font-main);
   font-size: 30px;
   letter-spacing: 2px;
`;

export const Text = styled.p`
   font-size: 14px;
   font-family: var(--font-main);
   color: var(--color-grey78);
`;
