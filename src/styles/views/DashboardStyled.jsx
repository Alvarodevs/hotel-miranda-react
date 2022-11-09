import styled from "styled-components";

export const BackgroundDashboard = styled.div`
	background-color: ${(props) => props.theme.backgroundColor};
	position: relative;
`;

export const MainContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
`;