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
const handleBgColor = (status) => {
    switch (status) {
        case "Refund":
            return "var(--color-pinkPale)";
        case "Booked":
            return "var(--color-greeenBooked)";
        case "Pending":
            return "var(--color-greyB2)";
        default:
            return "var(--color-grey57)";
    }
};

const handleColor = (status) => {
    switch (status) {
        case "Refund":
            return "var(--color-red)";
        case "Booked":
            return "var(--color-greenLight)";
        case "Pending":
            return "var(--color-grey6D)";
        default:
            return "var(--color-greyB2)";
    }
};

export const BookingStatus = styled(Status)`
    background-color: ${({ status }) => handleBgColor(status)};
    color: ${({ status }) => handleColor(status)};
	font-weight: 600;
`;