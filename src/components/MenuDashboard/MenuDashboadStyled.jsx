import styled from "styled-components";
import { Button } from "../../styles/Button";

export const MainContainer = styled.div`
    width: 18%;
    height: 100vh;
    background-color: var(--color-white);
    box-shadow: 13px 3px 40px var(--color-grey05);
    position: absolute;
    top: 0;
    left: 0;
    display: ${(props) => (props.path === "/login" ? "none" : "flex")};
    flex-direction: column;
	.rights{
		margin-bottom: 5rem;
	}
`;

export const LogoContainer = styled.div`
    width: 200px;
    height: 70px;
    margin: 20px auto;
`;
export const Logo = styled.img`
    width: 100%;
    height: 100%;
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const MenuItem = styled.button`
    border: none;
    background-color: transparent;
    color: var(--color-greenGrey);
    margin: 20px 0;
    padding: 0 10px 0 0;
    font-family: var(--font-main);
    font-size: 18px;
    justify-content: flex-start;
    display: flex;
    align-content: center;
    a {
        text-decoration: none;
        color: inherit;
        padding: inherit;
        display: flex;
    }
    :hover {
        color: var(--color-red);
        font-weight: 700;
        transition: 0.2s;
        .active {
            visibility: visible;
        }
    }

    svg {
        font-size: 30px;
        margin-right: 25px;
    }
    .dashboard {
        border-radius: 30px;
    }
    .key {
        transform: rotate(135deg);
    }
`;

export const Active = styled.div`
    width: 8px;
    height: 100%;
    background-color: var(--color-red);
    border-radius: 0px 6px 6px 0px;
    margin-right: 25px;
    visibility: hidden;
`;

export const UserCard = styled.div`
    width: 80%;
    margin: 4rem auto 60px auto;
    box-shadow: 0px 20px 30px var(--color-grey14);
    border-radius: 18px;
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    position: relative;
`;

export const Avatar = styled.img`
    width: 70px;
    height: 70px;
    background-color: grey;
    margin: 10px auto;
    border-radius: 8px;
    object-fit: cover;
    position: absolute;
    top: -35px;
    left: 0;
    right: 0;
`;

export const Name = styled.p`
    font-family: var(--font-main);
    font-weight: 700;
    color: var(--color-grey39);
    font-size: 16px;
    padding: 55px 0 10px 0;
`;

export const Email = styled.a`
    font-family: var(--font-main);
    font-size: 12px;
    color: var(--color-greyB2);
	text-decoration: none;
	color: inherit;
`;

export const EditButton = styled(Button)`
    margin: 16px auto 24px auto;
    background-color: var(--color-silver);
    color: var(--color-greenDark);
    font-weight: 700;
`;

export const FooterText = styled.p`
    text-align: center;
    font-family: var(--font-main);
    color: var(--color-greenGrey);
    font-size: 14px;
    span {
        color: var(--color-red);
    }
	a{
		text-decoration: none;
		color: var(--color-black21);
		font-weight: 700;
	}
`;

export const FooterTitle = styled(FooterText)`
    color: var(--color-black21);
    font-size: 16px;
    font-weight: 700;
`; 