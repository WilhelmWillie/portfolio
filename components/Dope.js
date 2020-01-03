import styled from "styled-components";

import Section from "./Section";
import { SectionTitle, SectionHeader } from "./Text";

export default () => (
  <Section>
    <Container>
      <Title>I'm Wilhelm Willie</Title>
      <Header>
        I build <span>dope</span> shit.
      </Header>
    </Container>
  </Section>
);

const Container = styled.div`
  flex-direction: column;
  text-align: center;
  width: 100%;
  padding: 64px 0;
  border: 1px solid ${({ theme }) => theme.color.border};
`;

const Title = styled(SectionTitle)`
  color: ${({ theme }) => theme.color.boldHeader};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 48px;
`;

const Header = styled(SectionHeader)`
  font-weight: ${({ theme }) => theme.fontWeight.black};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.megaMax};

  span {
    -webkit-text-stroke: 1px black;
    -webkit-text-fill-color: white;
    border-bottom: 3px solid ${({ theme }) => theme.color.emphasis};
  }
`;
