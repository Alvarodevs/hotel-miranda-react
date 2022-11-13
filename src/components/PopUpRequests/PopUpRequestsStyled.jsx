import styled from "styled-components";
import { Button } from "../../styles/Button";

export const RequestButton = styled(Button)`
    font-weight: 700;
    background-color: ${(props) =>
        props.status === "Booked" ? "var(--color-white)" : null};
    color: ${(props) =>
        props.status === "Booked" ? "var(--color-greenGrey)" : null};
    border: ${(props) =>
        props.status === "Booked" ? "1px solid var(--color-greenGrey)" : null};
`;

export const ModalContainer = styled.div`
    padding: 8rem;
    background-color: rgb(235,241,239, 0.8);
    margin: auto;
    color: var(--color-black);
    font-size: 25px;
    font-family: var(--font-main);
`;

export const CloseBtn = styled.div`
    cursor: pointer;
    position: absolute;
    display: block;
    padding: 2px 5px;
    line-height: 20px;
    right: -20px;
    top: -20px;
    font-size: 40px;
    color: var(--color-red);
`;
