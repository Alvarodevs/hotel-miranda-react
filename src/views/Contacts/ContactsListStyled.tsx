import styled from "styled-components";
import { Td } from "../../styles/Table";

export const IdContainer = styled(Td)`
   max-width: 5rem;
   overflow-wrap: break-word;
   padding-right: 0.5rem;
`;

export const Email = styled(Td)`
 padding-right: 0.5rem;
`;

export const Comment = styled(Td)`
   max-height: 5rem;
   text-overflow: ellipsis;
   word-wrap: break-word;
   display: block;
   overflow: hidden;
   padding-right: 0.2rem;
`;

export const ArchieveBtn = styled.button`
   color: var(--color-red);
   font-family: var(--font-main);
   font-weight: 600;
   font-size: 1rem;
   border: 1px solid var(--color-red);
   background-color: transparent;
   cursor: pointer;
   padding: 0.2rem;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
   &:hover{
      color: var(--color-white);
      background-color: var(--color-red);

   }
`;
