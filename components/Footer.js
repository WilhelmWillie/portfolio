import styled from "styled-components";

import Section from "./Section";
import Text from "./Section";

export default () => (
  <Backdrop>
    <Section>
      <Container>
        <Text tag="p" isSerif>
          Wilhelm Willie &copy; 2019. Fight On.
        </Text>
      </Container>
    </Section>
  </Backdrop>
);

const Backdrop = styled.div`
  background-color: ${({ theme }) => theme.color.grayBg};
`;

const Container = styled.div`
  flex-direction: column;
  text-align: center;
  width: 100%;
`;
