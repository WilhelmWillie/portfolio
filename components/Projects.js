import styled from "styled-components";

import Section from "./Section";
import { SectionTitle, SectionHeader } from "./Text";

export default () => (
  <Section>
    <Container>
      <SectionTitle>What I've built</SectionTitle>
      <SectionHeader>Like I said, I build dope shit.</SectionHeader>
    </Container>
  </Section>
);

const Container = styled.div`
  flex-direction: column;
  text-align: center;
  width: 100%;
`;
