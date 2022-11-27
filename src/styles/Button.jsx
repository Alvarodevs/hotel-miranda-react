import styled from "styled-components";

export const Button = styled.button`
   padding: 14px 25px;
   font-family: var(--font-main);
   font-size: 16px;
   border-radius: 12px;
   border: none;
   display: flex;
   align-items: center;
   align-content: center;
   cursor: pointer;
`;

export const NewestBtn = styled(Button)`
   color: var(--color-greenDark);
   background-color: var(--color-white);
   border: 1px solid var(--color-greenDark);
   font-weight: 600;
   margin-left: 20px;
   svg {
      font-size: 20px;
      height: inherit;
      margin-left: 1rem;
   }
`;
