import styled from "styled-components";
import { Button, NewestBtn } from "../../styles/Button";
import { Status} from '../../styles/Table';

export const NewRoomBtn = styled(Button)`
    color: var(--color-white);
    background-color: var(--color-greenDark);
    padding: 14px 45px;
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

//FIRST COLUMN DATA
export const RoomNameImg = styled.div`
    display: flex;
    width: fit-content;
    justify-content: space-between;
`;

export const Image = styled.img`
    width: 150px;
    height: 77px;
    border-radius: 8px;
    background-color: grey;
    object-fit: cover;
`;

export const Names = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    align-items: center;
    gap: 15px;
    align-self: center;
    font-family: var(--font-main);
    padding-right: 30px;
    width: 60px;
`;

export const RoomId = styled.div`
    color: var(--color-greenGrey);
`;

export const RoomNumber = styled.div`
    color: var(--color-grey39);
    font-size: 16px;
    font-weight: 700;
`;

export const RoomStatus = styled(Status)`
	background-color: ${(props) => props.status ? "var(--color-greenLight)" : "var(--color-red)"};
`;

