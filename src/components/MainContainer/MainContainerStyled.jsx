import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: ${(props) => (props.path === "/login" ? "100%" : "82%")};
  right: 0;
  top: ${(props) => (props.path === "/login" ? "0" : "5rem")};
  padding: ${(props) => (props.path === "/login" ? "0" : "30px")};
  background-color: var(--color-greyF8);
`;