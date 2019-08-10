import styled from "styled-components";

export default ({ children, ...props }) => (
  <Section {...props}>
    <Container>{children}</Container>
  </Section>
);

const Section = styled.div`
  padding: 80px 0;
`;

const Container = styled.div`
  display: flex;
  max-width: 960px;
  width: 93.75%;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
`;
