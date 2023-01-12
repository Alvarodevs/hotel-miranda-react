import styled from "styled-components";

export const BackgroundDashboard = styled.div`
	background-color: ${(props) => props.theme.backgroundColor};
	position: relative;
`;

export const ChartCalendarContainer = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 20px;
	gap:15px;
`;

export const CalendarContainer = styled.div`
   height: 520px;
   width: 600px;
   border-radius: 20px;
	@media screen and (max-width: 1420px){
		height:450px;
	}
`;

export const ChartContainer = styled.div`
   height: 520px;
   width: 550px;
   border-radius: 20px;
   background-color: var(--color-white);
   padding: 10px;
`;

export const InfoContainer = styled.div`
   position: absolute;
   left: 50%;
   top: 20px;
   display: flex;
   margin-top: 30px;
   margin-right: 60px;
   float: right;
`;
export const InfoTitle = styled.div`
   display: flex;
   margin-right: 20px;
`;
export const Square = styled.div`
   width: 10px;
   height: 10px;
   margin-top: 8px;
   margin-right: 8px;
   background-color: ${({ color }) => color};
`;