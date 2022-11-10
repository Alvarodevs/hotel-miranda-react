import styled from "styled-components";

export const MainContainer = styled.div`
  width: 18%;
  height: 100vh;
  background-color: var(--color-white);
  box-shadow: 13px 3px 40px var(--color-grey05);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  width: 90%;
  height: 15%;
  margin: 10px auto;
  background-image: url('/src/assets/images/logo-dk.png');
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
  margin-right: 50px;
  visibility: hidden;
`;