import styled from "styled-components";
import { Button } from "../../styles/Button";

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