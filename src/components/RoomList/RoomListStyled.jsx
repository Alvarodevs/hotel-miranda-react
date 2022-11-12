import styled from "styled-components";
import { Button, NewestBtn } from "../../styles/Button";
import { ListButtonsContainer, NewBtnsContainer, Selector, Selectors } from '../../styles/ListButtons';
import { ListContainer,
THeaderContainer,
HeaderTitle,
TBody,
ListCard,
Td,
TdTextWeight,
Span,
Status} from '../../styles/Table';

export const RoomListButtons = styled(ListButtonsContainer)`
`;

export const RoomSelectors = styled(Selectors)`
`;

export const RoomSelector = styled(Selector)`
`;

export const RoomRightBtns = styled(NewBtnsContainer)`
`;

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

export const RoomListContainer = styled(ListContainer)`
    width: 100%;
    background-color: var(--color-white);
    border-radius: 20px;
    padding: 20px 30px;
`;

export const RoomTHeaderContainer = styled(THeaderContainer)`
    .amenitie {
        padding-left: 30px;
        width: 300px;
    }
`;

export const RoomHeaderTitle = styled(HeaderTitle)`
    font-family: var(--font-main);
    font-size: 18px;
    color: var(--color-grey39);
    border-bottom: 2px solid var(--color-greyF5);
    text-align: start;
`;
export const RoomTBody = styled(TBody)`
    padding: 0 20px;
`;

export const RoomListCard = styled(ListCard)`
    padding: 20px 40px 0px 0px;
    height: 85px;
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

//TD DATA
export const RoomTd = styled(Td)`
    font-family: var(--font-main);
    font-size: 16px;
    span {
        color: var(--color-greenGrey);
        font-size: 14px;
    }
`;

export const RoomTdText = styled(TdTextWeight)`
    font-weight: 700;
`;

export const RoomSpan = styled(Span)`
    font-family: var(--font-main);
    font-size: 16px;
`;

export const RoomStatus = styled(Status)`
	background-color: ${(props) => props.status ? "var(--color-greenLight)" : "var(--color-red)"};
`;

