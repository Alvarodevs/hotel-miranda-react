import styled from "styled-components";
import { RoomNewestBtn } from "../../components/RoomList/RoomListStyled";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem auto;
`;

export const Nav = styled.nav`
    display: flex;
`;

export const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Li = styled.li`
    color: var(--color-black);
    list-style: none;
`;

export const Anchor = styled.a`
    border-radius: 12px;
    font-family: var(--font-main);
    color: ${({ active }) =>
        active ? "var(--color-white)" : "var(--color-grey39)"};
    font-size: 20px;
    padding: 15px 23px;
    text-decoration: none;
    background-color: ${({ active }) =>
        active ? "var(--color-greenDark)" : "transparent"};
`;

export const Text = styled.p`
    color: var(--color-grey39);
    font-family: var(--font-main);
    font-size: 16px;
`;

export const PaginationButton = styled(RoomNewestBtn)`
    margin: 0 10px;
`;
