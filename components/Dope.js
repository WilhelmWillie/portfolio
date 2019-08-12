import styled from "styled-components";

import Section from "./Section";

export default () => (
  <Section column>
    <DopeContainer>
      <DopeTitle>What do I do</DopeTitle>
      <DopeHeader>I build dope shit.</DopeHeader>
    </DopeContainer>
  </Section>
);

const DopeContainer = styled.div`
  flex-direction: column;
  text-align: center;
  width: 100%;
`;

const DopeTitle = styled.h3`
  font-size: 24px;
  text-transform: uppercase;
  font-family: sans-serif;
  font-weight: 100;
  color: #a2a2a2;
`;

const DopeHeader = styled.h2`
  text-align: center;
  font-size: 42px;
  color: #545454;
  margin-top: 18px;
`;
