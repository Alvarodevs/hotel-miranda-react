import styled from "styled-components";
import { Button } from "../../styles/Button";

export const MainContainer = styled.div`
    padding: 0 30px;
`;

export const RoomListButtons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`;

export const Selectors = styled.div`
    display: flex;
    align-items: center;
`;

export const Selector = styled.button`
    border: none;
    color: var(--color-grey6E);
    font-family: var(--font-main);
    background-color: transparent;
    height: 37px;
    display: flex;
    align-items: flex-start;
    padding: 0 25px;
    border-bottom: 1px solid var(--color-greyD4);

    :hover {
        font-weight: 700;
        color: var(--color-greenDark);
        border-bottom: 2px solid var(--color-greenDark);
    }
`;
export const NewBtnsContainer = styled.div`
    display: flex;
`;
export const NewRoomBtn = styled(Button)`
    color: var(--color-white);
    background-color: var(--color-greenDark);
    margin-right: 20px;
    padding: 14px 45px;
`;

export const NewestBtn = styled(Button)`
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

export const RoomListContainer = styled.table`
    width: 100%;
    background-color: var(--color-white);
    border-radius: 20px;
    padding: 20px 30px;
`;

export const THeaderContainer = styled.thead`
    .amenitie {
        padding-left: 30px;
        width: 300px;
    }
`;

export const HeaderTitle = styled.th`
    font-family: var(--font-main);
    font-size: 18px;
    color: var(--color-grey39);
    border-bottom: 2px solid var(--color-greyF5);
    text-align: start;
`;
export const TBody = styled.tbody`
    padding: 0 20px;
`;

export const RoomListCard = styled.tr`
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
export const Td = styled.td`
    font-family: var(--font-main);
    font-size: 16px;
`;

export const TdText = styled.td`
    font-family: var(--font-main);
    font-size: 16px;
    font-weight: 700;
    //text-align: center;

    span {
        color: var(--color-greenGrey);
        font-size: 14px;
    }
`;

export const Text = styled.span`
    font-family: var(--font-main);
    font-size: 16px;
`;

export const Status = styled.div`
	width: 125px;
	height: 45px;
	border-radius: 12px;
	background-color: ${(props) => props.status ? "var(--color-greenLight)" : "var(--color-red)"};
	text-align: center;
	padding:0.6rem;
	color: var(--color-white);
`;

