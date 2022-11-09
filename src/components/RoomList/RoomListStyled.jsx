import styled from "styled-components";

export const RoomListContainer = styled.table` 
	padding: 55px 50px 45px 50px;
	background-color: yellow;
	position: absolute;
	height: 100%;
	width: 100%;
`;

export const RoomListButtons = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 55px 50px 35px 50px;
`;

export const Selectors = styled.div`
	display: flex;
	gap: 65px;
`;

export const Selector = styled.button`
  border: none;
  color: var(--color-grey-6E);
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

export const HeaderTitle = styled.th`
	font-family: var(--font-main);
	font-size: 18px;
	color: var(--color-grey39);
	border-bottom: 2px solid var(--color-greyF5);
`;