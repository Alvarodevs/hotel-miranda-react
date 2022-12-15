import styled from "styled-components";
import { Button } from "../../styles/Button";
import {Td, Status} from "../../styles/Table";

export const MonthButton = styled(Button)`
   color: var(--color-white);
   background-color: var(--color-greenDark);
   padding: 14px 25px 14px 35px;
   display: flex;
   align-items: center;
   svg {
      font-size: 20px;
      height: inherit;
      margin-left: 1rem;
   }
   cursor: pointer;
	
`;

export const RequestButton = styled(Button)`
    font-weight: 700;
    background-color: ${(props) =>
        props.status === "Booked" ? "var(--color-white)" : null};
    color: ${(props) =>
        props.status === "Booked" ? "var(--color-greenGrey)" : null};
    border: ${(props) =>
        props.status === "Booked" ? "1px solid var(--color-greenGrey)" : null};
`;


export const BookingTd = styled(Td)`
	margin: 0 20px;
`; 
//MULTIPLE OPTIONS STATUS
export const BookingStatus = styled(Status)`
    ${({ status }) => {
		if (status === "Check out"){
			return`
				background-color: var(--color-pinkPale); 
				color: var(--color-red);
			`
		} else if (status === "Check in"){
			return`
				background-color: var(--color-greeenBooked); 
				color: var(--color-greenLight);
			`
		} else {
			return `
			background-color: var(--color-yellowLight); 
			color: var(--color-yellowDark);
		`;}
	}};
    font-weight: 600;
`;