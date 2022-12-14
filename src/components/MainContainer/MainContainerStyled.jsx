import styled from "styled-components";

export const Container = styled.div`
   position: absolute;
   width: ${({ path, show }) =>
      path === "/login" || path === "/error_404" || !show ? "100%" : "82%"};
   right: 0;
   top: ${({ path }) =>
      path === "/login" || path === "/error_404" ? "0" : "5rem"};
   padding: ${({ path }) =>
      path === "/login" || path === "/error_404" ? "0" : "30px"};
   background-color: var(--color-greyF8);
	
	transition: 0.8s ease-in-out;
   a {
      text-decoration: none;
   }
`;
