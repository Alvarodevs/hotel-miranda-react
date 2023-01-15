import styled from "styled-components";
import { Button } from "../../../styles/Button";
import { Avatar } from "../../../styles/Avatar";
import { Td } from "../../../styles/Table";
import { Selector } from "../../../styles/ListButtons";

export const UserSelector = styled(Selector)``;

export const UsersSearchbarContainer = styled.div`
   width: 18rem;
   height: 57px;
   display: flex;
   align-items: center;
   position: relative;
   padding-left: 5%;

   svg {
      font-size: 20px;
      position: absolute;
      right: 20px;
      color: var(--color-grey6E);
   }
`;

export const Searchbar = styled.input`
   background-color: var(--color-whiteFC);
   width: 100%;
   height: 100%;
   border-radius: 12px;
   border: none;
   display: inline-block;
   padding: 0 20px;
   font-family: var(--font-main);
   font-size: 16px;
`;

export const UserAvatar = styled(Avatar)`
   width: 100px;
   height: 100px;
`;

export const NewEmployee = styled(Button)`
   color: var(--color-white);
   background-color: var(--color-greenDark);
   padding: 14px 45px;
   cursor: pointer;
`;

export const JobDesc = styled(Td)`
   max-width: 400px;
   padding-right: 20px;
`;
export const CheckText = styled.p`
   font-size: 13px;
   font-weight: 600;
   color: #5d8c7f;
`;

export const UserStatus = styled.p`
   text-transform: uppercase;
   color: ${({ state }) =>
      state ? "var(--color-greenLight)" : "var(--color-red)"};
   font-weight: 600;
`;
