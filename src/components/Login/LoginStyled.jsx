import styled from "styled-components";

export const LoginContainer = styled.div`
    padding: 30px;
    border-radius: 12px;
	background-color: var(--color-silver);
    width: 60%;
    margin: 10rem auto 28rem auto;
    box-shadow: 0px 16px 30px #00000014;
`;

export const Header = styled.div`
    color: var(--color-black);
	text-align: center;
	font-family: var(--font-main);
	margin-bottom: 30px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 600px;
`;

export const Input = styled.input`
  height: 2rem;
  margin: 20px;
  padding: 10px 30px;
  border: none;
  border-radius: 12px;
  font-family: var(--font-main);

  :focus-visible {
    outline: 1px solid var(--color-greenLight);
  }
`;
export const ButtonsContainer = styled.div`
	display: flex;
	//justify-content: space-around;
`;
export const Submit = styled.input`
  width: 8rem;
  margin: 30px auto 0 auto;
  border: none;
  height: 2rem;
  background-color: var(--color-greenDark);
  border-radius: 12px;
  font-family: var(--font-main);
  color: var(--color-white);

  :hover {
    background-color: var(--color-greenLight);
    transition: 0.15s;
    color: var(--color-black);
  }
`;