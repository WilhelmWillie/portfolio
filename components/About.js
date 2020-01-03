import styled from "styled-components";

import Section from "./Section";
import Text, { Body } from "./Text";

const renderSkills = () => {
  const skills = [
    "Javascript",
    "Java",
    "Python",
    "C++",
    "Ruby",
    "SQL",
    "HTML",
    "CSS",
    "Node.js",
    "Rails",
    "Flask",
    "Express",
    "React",
    "React Native",
    "Angular",
    "MongoDB",
    "MySQL",
    "Agile Methodologies",
    "UX/UI Design",
    "Design Thinking",
    "Project Management"
  ];

  return skills.map(skill => (
    <Skill key={`skill_${skill.toLowerCase()}`}>{skill}</Skill>
  ));
};

export default () => (
  <Section>
    <TitleSection>
      <Header tag="h2" size="medium">
        Full Stack Engineer
      </Header>
      <SubHeader tag="h3" size="medium" color="subHeader" italic>
        Fueled By Soylent
      </SubHeader>
    </TitleSection>

    <Content>
      <Sidebar>
        <SubHeader tag="h3" size="medium" color="subHeader">
          Education
        </SubHeader>

        <Body>
          Stephen Decatur Elementary
          <br />
          <em>Class of 2009</em>
          <br />
          <br />
          University of Southern California
          <br />
          <em>Class of 2020</em>
        </Body>

        <SubHeader tag="h3" size="medium" color="subHeader">
          Places
        </SubHeader>

        <Body>
          <b>Origin:</b> Baguio, Philippines
          <br />
          <b>Home:</b> Jacksonville, Florida
          <br />
          <b>Now:</b> Los Angeles, CA
          <br />
          <b>Future:</b> San Francisco, CA
          <br />
        </Body>

        <SubHeader tag="h3" size="medium" color="subHeader">
          Fun Fact
        </SubHeader>

        <Body>I have a typing speed of 140 WPM.</Body>
      </Sidebar>

      <Main>
        <Body>
          I'm a tinkerer, a creative, and a builder. I enjoy working across the
          stack to produce great digital experiences from concept to production.
          I'm always down to talk about code, design, and product. Currently,
          I'm interested in exploring the intersection between software
          engineering and user experience design. Catch me in my room building
          wireframes and mockups in Sketch and building them out using my
          favorite frameworks! Feel free to contact me if you have any
          opportunities you'd like to discuss or if you just want to talk tech!
        </Body>

        <SkillsHeader tag="h3" size="medium" color="subHeader">
          Skills
        </SkillsHeader>

        <Skills>{renderSkills()}</Skills>
      </Main>
    </Content>
  </Section>
);

const TitleSection = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 32px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

const Sidebar = styled.div`
  display: flex;
  flex-basis: 35%;
  flex-direction: column;
  padding: 0 16px;

  ${({ theme }) => theme.media.tablet`
    width: 75%;
    margin: 0 auto;
    margin-bottom: 32px;
  `}
`;

const Main = styled.div`
  display: flex;
  flex-basis: 65%;
  flex-direction: column;
  padding: 0 16px;
`;

const Header = styled(Text)`
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeight.black};
  font-size: ${({ theme }) => theme.fontSize.large};
`;

const SubHeader = styled(Text)`
  margin-top: 16px;
  margin-bottom: 8px;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

const SkillsHeader = styled(SubHeader)`
  margin-bottom: 24px;
  margin-top: 24px;
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Skill = styled.div`
  background: ${({ theme }) => theme.color.skill};
  color: ${({ theme }) => theme.color.white};
  border-radius: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 8px 18px;
  font-size: 14px;
`;
