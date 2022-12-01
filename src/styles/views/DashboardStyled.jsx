import styled from "styled-components";

export const BackgroundDashboard = styled.div`
	background-color: ${(props) => props.theme.backgroundColor};
	position: relative;
`;

export const ChartCalendarContainer = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 20px;
`;

export const ChartContainer = styled.div`
	background-color: red;
	height: 500px;
	width: 600px;
	border-radius: 20px;
`;
export const CalendarContainer = styled.div`
   border: 1px solid blue;
   height: 500px;
   width: 600px;
   border-radius: 20px;
`;