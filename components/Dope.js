import styled from "styled-components";

import Section from "./Section";
import Text from "./Text";

export default () => (
  <Section>
    <DopeContainer>
      <DopeTitle tag="h3" size="medium" weight="light">
        What do I do
      </DopeTitle>
      <DopeHeader tag="h2" size="large" isSerif>
        I build dope shit.
      </DopeHeader>
    </DopeContainer>
  </Section>
);

const DopeContainer = styled.div`
  flex-direction: column;
  text-align: center;
  width: 100%;
`;

const DopeTitle = styled(Text)`
  text-transform: uppercase;
  color: #a2a2a2;
`;

const DopeHeader = styled(Text)`
  text-align: center;
  color: #545454;
  margin-top: 18px;
`;
