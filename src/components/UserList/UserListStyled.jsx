import styled from "styled-components";
import { Button } from "../../styles/Button";
import {Avatar} from "../../styles/Avatar";
import { Td } from "../../styles/Table";
import { Selector } from "../../styles/ListButtons";
import {SearchbarContainer} from "../HeaderDashboard/HeaderDashbStyled"

export const UserSelector = styled(Selector)`
`;

export const UsersSearchbarContainer = styled(SearchbarContainer)`
	margin-left: 20px;
`;

export const UserAvatar = styled(Avatar)`
    width: 100px;
    height: 100px;
`;

export const NewEmployee = styled(Button)`
    color: var(--color-white);
    background-color: var(--color-greenDark);
    padding: 14px 45px;
`; 

export const JobDesc = styled(Td)`
	max-width:400px;
	padding-right:20px;
`;
export const CheckText = styled.p`
    font-size: 13px;
    font-weight: 600;
    color: #5D8C7F;
`;

export const UserStatus = styled.p`
    text-transform: uppercase;
    color: ${({ state }) =>
        state ? "var(--color-greenLight)" : "var(--color-red)"};
		font-weight: 600;
`; 