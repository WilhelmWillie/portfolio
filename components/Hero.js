import styled from "styled-components";

import Container from "./layout/Container";

const Hero = () => {
  return (
    <HeroWrapper>
      <BG />

      <Container>
        <Content>
          <Headshot
            src="/headshot.jpg"
            alt="Headshot of Wilhelm Willie"
            width="76"
            height="76"
          />
          <Text>
            <h1>Wilhelm Willie</h1>
            <p>building things 🚀</p>
          </Text>
        </Content>
      </Container>

      <SocialLinks>
        <SocialLink
          href="https://www.twitter.com/wilhelm_willie"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/twitter.svg" alt="Twitter Icon" width="32" height="32" />
        </SocialLink>

        <SocialLink
          href="https://www.github.com/wilhelmwillie"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/github.svg" alt="GitHub Icon" width="32" height="32" />
        </SocialLink>

        <SocialLink
          href="https://www.linkedin.com/in/wilhelmwillie"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/linkedIn.svg" alt="LinkedIn Icon" width="32" height="32" />
        </SocialLink>
      </SocialLinks>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.header`
  display: flex;
  flex-direction: column;
  height: 450px;
  position: relative;
  justify-content: flex-start;
  background-image: url("/mission_control_bg.jpg");
  background-position: center center;
  background-size: cover;
  color: #ffffff;
`;

const BG = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.22) 0%,
    rgba(0, 0, 0, 0.66) 100%
  );
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 1;
  margin-top: 136px;
`;

const Headshot = styled.img`
  width: 76px;
  height: 76px;
  border-radius: 50%;
  overflow: hidden;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-right: 24px;
`;

const Text = styled.div`
  p {
    margin: 5px 0 0px 7px;
    font-size: 24px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: absolute;
  z-index: 1;
  bottom: 88px;
`;

const SocialLink = styled.a`
  transition: 0.15s all;
  width: 32px;
  height: 32px;
  margin: 0 25px;

  :hover {
    opacity: 0.8;
  }
`;

export default Hero;
