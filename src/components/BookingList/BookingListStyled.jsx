import styled from "styled-components";
import { Button } from "../../styles/Button";
import {
    ListButtonsContainer,
    NewBtnsContainer,
    Selector,
    Selectors,
} from "../../styles/ListButtons";

import {ListContainer,
THeaderContainer,
HeaderTitle,
TBody,
ListCard,
Td,
TdTextWeight,
Span,
Status} from '../../styles/Table'

export const BookingListButtons = styled(ListButtonsContainer)`
`;

export const BookingSelectors = styled(Selectors)`
`;

export const BookingSelector = styled(Selector)`
`;

export const BookingRightBtns = styled(NewBtnsContainer)`
`;

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

export const BookingListContainer = styled(ListContainer)``;
export const BookingTHeaderContainer = styled(THeaderContainer)``;
export const BookingHeaderTitle = styled(HeaderTitle)``;
export const BookingTBody = styled(TBody)``;
export const BookingListCard = styled(ListCard)``;
export const BookingTd = styled(Td)``;
export const BookingTdTextWeight = styled(TdTextWeight)``;
export const BookingSpan = styled(Span)``;
export const BookingStatus = styled(Status)``;
