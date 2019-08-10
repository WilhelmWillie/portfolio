import styled from "styled-components";

import Section from "./Section";

export default () => (
  <Section column>
    <DopeContainer>
      <DopeTitle>what do i do?</DopeTitle>
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
`;

const DopeHeader = styled.h2`
  text-align: center;
  font-size: 32px;
`;
