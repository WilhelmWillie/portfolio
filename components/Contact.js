import styled from "styled-components";

import Section from "./Section";
import { SectionTitle, SectionHeader } from "./Text";

export default () => (
  <Section>
    <Container>
      <SectionTitle>Contact Me</SectionTitle>
      <SectionHeader>Like what you see? Let's talk.</SectionHeader>
    </Container>
  </Section>
);

const Container = styled.div`
  flex-direction: column;
  text-align: center;
  width: 100%;
`;
