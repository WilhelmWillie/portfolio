import styled from "styled-components";

import Container from "./layout/Container";
import Card from "./Card";

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

        <CardGrid>
          <Card
            title="Project Name"
            description="Lorem ipsum dolor sit amet consectetur"
            link="https://github.com/wilhelmwillie"
          />

          <Card
            title="Project Name"
            description="Lorem ipsum dolor sit amet consectetur"
            link="https://github.com/wilhelmwillie"
          />

          <Card
            title="Project Name"
            description="Lorem ipsum dolor sit amet consectetur"
            link="https://github.com/wilhelmwillie"
          />

          <Card
            title="Project Name"
            description="Lorem ipsum dolor sit amet consectetur"
            link="https://github.com/wilhelmwillie"
          />

          <Card
            title="Project Name"
            description="Lorem ipsum dolor sit amet consectetur"
            link="https://github.com/wilhelmwillie"
          />

          <Card
            title="Project Name"
            description="Lorem ipsum dolor sit amet consectetur"
            link="https://github.com/wilhelmwillie"
          />
        </CardGrid>
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

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
  margin-top: 54px;
`;

export default Work;
