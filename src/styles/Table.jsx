import styled from "styled-components";

export const ListContainer = styled.table`
    width: 100%;
    background-color: var(--color-white);
    border-radius: 20px;
    padding: 20px 30px;
`;

export const THeaderContainer = styled.thead`
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
`;

export const ListCard = styled.tr`
    padding: 20px 40px 0px 0px;
    height: 85px;
`;

export const Td = styled.td`
    font-family: var(--font-main);
    font-size: 16px;
    span {
        color: var(--color-greenGrey);
        font-size: 14px;
    }
`;

export const TdTextWeight = styled(Td)`
    font-weight: 700;
`;

export const Span = styled.span`
    font-family: var(--font-main);
    font-size: 16px;
`;

export const Status = styled.div`
    width: 125px;
    height: 45px;
    border-radius: 12px;
    text-align: center;
    padding: 0.6rem;
    color: var(--color-white);
`;
