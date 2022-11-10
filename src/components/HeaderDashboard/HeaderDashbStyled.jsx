import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 5rem;
  padding: 25px 40px 25px 20%;
  background-color: var(--color-white);
  box-shadow: 0px 3px 10px var(--color-grey05);
  display: ${(props) => (props.path === "/login" ? "none" : "block")};
`;

export const TitleContainer = styled.div`
	display: inline-block;
`;
export const Logo = styled.div`
    width: 3rem;
    display: inline-block;
`;

export const Site = styled.h3`
    font-family: var(--font-main);
    display: inline-block;
    font-size: 28px;
    color: var(--color-grey26);
`;
