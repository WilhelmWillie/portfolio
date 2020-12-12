import styled from "styled-components";

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 92.5%;
  max-width: ${(p) => p.theme.layout.width}px;
`;

export default Container;
