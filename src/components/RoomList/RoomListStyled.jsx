import styled from "styled-components";

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
  padding: 20px 30px;
  //border-collapse: collapse;
`;

export const THeaderContainer = styled.thead`
  .title {
    text-align: center;
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
	border-collapse: separate;
`;

export const RoomListCard = styled.tr`
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
  text-align: center;

  span{
	color: var(--color-greenGrey);
	font-size: 14px;
  }
`;

export const Text = styled.span`
	font-family: var(--font-main);
	font-size: 16px;
`;