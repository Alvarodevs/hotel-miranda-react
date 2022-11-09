import styled from "styled-components";

export const BackgroundDashboard = styled.div`
	background-color: ${(props) => props.theme.backgroundColor};
	position: relative;
	display: flex;
`;

export const HeaderInfoContainer = styled.div`
  width: 82%;
  position: absolute;
  top: 0;
  right: 0;
`;