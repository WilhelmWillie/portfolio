import styled from "styled-components";

import Section from "./Section";
import { SectionTitle, SectionHeader } from "./Text";

export default () => (
  <Section>
    <DopeContainer>
      <SectionTitle>What do I do</SectionTitle>
      <SectionHeader>I build dope shit.</SectionHeader>
    </DopeContainer>
  </Section>
);

const DopeContainer = styled.div`
  flex-direction: column;
  text-align: center;
  width: 100%;
`;
