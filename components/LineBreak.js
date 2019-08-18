import styled from "styled-components";

export default () => <LineBreak />;

const LineBreak = styled.hr`
  width: 100%;
  max-width: 270px;
  display: block;
  height: 2px;
  background: #d8d8d8;
  border: none;
`;
