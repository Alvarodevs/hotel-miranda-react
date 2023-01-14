import styled from "styled-components";
import { Button, NewestBtn } from "../../../styles/Button";
import { Status } from "../../../styles/Table";

export const NewRoomBtn = styled(Button)`
   color: var(--color-white);
   background-color: var(--color-greenDark);
   padding: 14px 45px;
   cursor: pointer;
`;

export const RoomNewestBtn = styled(NewestBtn)`
   color: var(--color-greenDark);
   background-color: var(--color-white);
   border: 1px solid var(--color-greenDark);
   font-weight: 600;
   display: flex;
   align-items: center;
   svg {
      font-size: 20px;
      height: inherit;
      margin-left: 1rem;
   }
`;

export const RoomStatus = styled(Status)`
   background-color: ${(props) =>
      props.status ? "var(--color-greenLight)" : "var(--color-red)"};
`;
