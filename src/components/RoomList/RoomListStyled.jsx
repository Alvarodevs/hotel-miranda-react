import styled from "styled-components";

export const MainContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 82%;
  right: 0;
  top: 100px;
  padding: 50px;
`;

export const RoomListButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;



export const Selectors = styled.div`
  display: flex;
  gap: 65px;
`;

export const Selector = styled.button`
  border: none;
  color: var(--color-grey6E);
  font-family: var(--font-main);
  background-color: transparent;
  height: 37px;
  display: flex;
  align-items: flex-start;
`;

export const NewRoomBtn = styled.button`
  border-radius: 12px;
  border: none;
  color: var(--color-white);
  background-color: var(--color-greenDark);
  margin-right: 20px;
  padding: 15px 50px;
`;

export const NewestBtn = styled.button`
  border-radius: 12px;
  color: var(--color-greenDark);
  background-color: var(--color-white);
  padding: 14px 20px;
  border: 1px solid var(--color-greenDark);
`;

export const RoomListContainer = styled.table`
  width: 100%;
  background-color: var(--color-white);
  border-radius: 20px;
`;

export const HeaderTitle = styled.th`
  font-family: var(--font-main);
  font-size: 18px;
  color: var(--color-grey39);
  border-bottom: 2px solid var(--color-greyF5);
  text-align: start;
`;

export const RoomListCard = styled.tr`
  display: flex;
  height: 121px;
  padding: 20px 40px 20px 0px;
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
`;

export const Names = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  align-items: center;
  gap: 15px;
  align-self: center;
  font-family: var(--font-main);
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

  span{
	color: var(--color-greenGrey);
	font-size: 14px;
  }
`;

export const Text = styled.span`
	font-family: var(--font-main);
	font-size: 16px;
`;