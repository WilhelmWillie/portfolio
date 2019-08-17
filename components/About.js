import styled from "styled-components";

import Section from "./Section";
import Text from "./Text";

export default () => (
  <Section>
    <Sidebar>
      <Text tag="h3" size="medium" isSerif>
        Wilhelm Willie
      </Text>

      <Text tag="h4" weight="light" size="small">
        University of Southern California
      </Text>
      <Text tag="h4" weight="light" size="small">
        Class of 2020
      </Text>
      <Text tag="h4" weight="light" size="small">
        Los Angeles, CA
      </Text>

      <Button href="https://linkedin.com/in/wilhelmwillie">LinkedIn</Button>
      <Button href="https://github.com/wilhelmwillie">GitHub</Button>
      <Button href="#">Resume</Button>
    </Sidebar>

    <Main>
      <Text tag="h2" size="big" isSerif>
        Full stack engineer with a passion for building great products
      </Text>

      <Text weight="light" tag="p">
        I'm a tinkerer, a creative, and a builder. I enjoy working across the
        stack to produce great digital experiences from concept to production.
        I'm always down to talk about code, design, and product. Currently, I'm
        interested in exploring the intersection between software engineering
        and user experience design. Catch me in my room building wireframes and
        mockups in Sketch and building them out using my favorite frameworks!
        Feel free to contact me if you have any opportunities you'd like to
        discuss or if you just want to talk tech!
      </Text>

      <Skills>
        <Skill>Node.js</Skill>
        <Skill>React</Skill>
        <Skill>Angular</Skill>
      </Skills>
    </Main>
  </Section>
);

const Button = styled.a`
  padding: 15px;
  background: #1fde8f;
  border-radius: 8px;
`;

const Sidebar = styled.div`
  display: flex;
  flex-basis: 30%;
  flex-direction: column;
  padding: 0 16px;
`;

const Main = styled.div`
  display: flex;
  flex-basis: 70%;
  flex-direction: column;
  padding: 0 16px;
`;

const Skills = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Skill = styled.div`
  padding: 8px;
  border-radius: 8px;
  background-color: gray;
`;
