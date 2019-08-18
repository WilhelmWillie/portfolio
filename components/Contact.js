import styled from "styled-components";

import Section from "./Section";
import Text from "./Text";

export default () => (
  <Section>
    <Container>
      <Title tag="h3" size="medium" weight="light">
        Contact Me
      </Title>
      <Header tag="h2" size="large" isSerif>
        Like what you see? Let's talk.
      </Header>
    </Container>
  </Section>
);

const Container = styled.div`
  flex-direction: column;
  text-align: center;
  width: 100%;
`;

const Title = styled(Text)`
  text-transform: uppercase;
  color: #a2a2a2;
`;

const Header = styled(Text)`
  text-align: center;
  color: #545454;
  margin-top: 18px;
`;
