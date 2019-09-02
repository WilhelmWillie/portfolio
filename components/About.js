import styled from "styled-components";

import Section from "./Section";
import Text, { Body } from "./Text";

import headshot from "../assets/headshot.jpg";

const renderSkills = () => {
  const skills = ["C++", "JavaScript", "Python"];

  return skills.map(skill => <Skill key={`skill_${skill}`}>{skill}</Skill>);
};

export default () => (
  <AboutSection>
    <Sidebar>
      <div>
        <Headshot src={headshot} />
      </div>

      <SubHeader tag="h3" size="medium" isSerif>
        Wilhelm Willie
      </SubHeader>

      <Detail tag="h4" weight="light" size="small">
        🎓 University of Southern California
      </Detail>
      <Detail tag="h4" weight="light" size="small">
        📌 Los Angeles, CA
      </Detail>
      <Detail tag="h4" weight="light" size="small">
        ⏰ Class of 2020
      </Detail>
    </Sidebar>

    <Main>
      <BlurbTitle tag="h2" size="big" isSerif>
        Full stack engineer with a passion for building great products
      </BlurbTitle>

      <Body>
        I'm a tinkerer, a creative, and a builder. I enjoy working across the
        stack to produce great digital experiences from concept to production.
        I'm always down to talk about code, design, and product. Currently, I'm
        interested in exploring the intersection between software engineering
        and user experience design. Catch me in my room building wireframes and
        mockups in Sketch and building them out using my favorite frameworks!
        Feel free to contact me if you have any opportunities you'd like to
        discuss or if you just want to talk tech!
      </Body>

      <SubHeader tag="h3" size="medium" isSerif>
        Skills
      </SubHeader>

      <Skills>{renderSkills()}</Skills>
    </Main>
  </AboutSection>
);

const Button = styled.a`
  padding: 15px;
  background: #1fde8f;
  border-radius: 8px;
`;

const AboutSection = styled(Section)`
  ${({ theme }) => theme.media.tablet`
    > div {
      flex-direction: column;
    }
  `}
`;

const Sidebar = styled.div`
  display: flex;
  flex-basis: 30%;
  flex-direction: column;
  padding: 0 16px;
  text-align: center;

  ${({ theme }) => theme.media.tablet`
    width: 75%;
    margin: 0 auto;
    margin-bottom: 32px;
  `}
`;

const Main = styled.div`
  display: flex;
  flex-basis: 70%;
  flex-direction: column;
  padding: 0 16px;
`;

const Headshot = styled.img`
  border-radius: 50%;
  width: 100%;
  height: auto;
`;

const SubHeader = styled(Text)`
  margin: 32px 0 16px;
`;

const Detail = styled(Text)`
  margin-bottom: 16px;
  text-align: left;
`;

const BlurbTitle = styled(Text)`
  line-height: 1.25em;
  margin-bottom: 12px;
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Skill = styled.div`
  background: #ededed;
  border-radius: 8px;
  margin-right: 16px;
  padding: 16px 24px;
  font-size: 14px;
`;
