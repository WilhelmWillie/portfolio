import styled from "styled-components";

import Container from "./layout/Container";

const Work = () => {
  return (
    <WorkWrapper>
      <Container>
        <Heading>Work</Heading>

        <Blurb>
          I’m a tinkerer who likes building things every once in a while. Check
          out some of the personal projects I’ve worked on over the years
          ranging from Twitter bots to web apps to beyond.
        </Blurb>
      </Container>
    </WorkWrapper>
  );
};

const WorkWrapper = styled.div`
  padding: ${(p) => p.theme.layout.sectionPadding}px 0;
  background: #f8fbfc;
  border-top: 1px solid #dcdcdc;
`;

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 24px;
`;

const Blurb = styled.p`
  max-width: 800px;
  margin: 0 auto;
`;

export default Work;
