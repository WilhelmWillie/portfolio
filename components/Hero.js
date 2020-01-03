import styled from "styled-components";

import Text from "./Text";

import Headshot from "../assets/headshot.jpg";

export default () => (
  <Hero>
    <HeroContainer>
      <HeadshotImg src={Headshot} />

      <HeroText>
        <NameTitle
          tag="h1"
          size="max"
          color="white"
          size="xlarge"
          weight="black"
        >
          Wilhelm Willie
        </NameTitle>
      </HeroText>
    </HeroContainer>

    <Background />
  </Hero>
);

const Hero = styled.div`
  width: 100%;
  margin-bottom: 50px;
  position: relative;
`;

const Background = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 50px;
  background-image: linear-gradient(135deg, #322f2f 0%, #121212 100%);
`;

const HeadshotImg = styled.img`
  max-width: 380px;
  border-radius: 4px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
  z-index: 1;
  margin-top: 40px;
`;

const HeroContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  align-items: center;
  flex-direction: row;
`;

const HeroText = styled.div`
  width: 100%;
  text-align: center;
  z-index: 1;
  padding-bottom: 50px;
`;

const NameTitle = styled(Text)`
  text-transform: uppercase;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
  -webkit-text-fill-color: transparent;
  letter-spacing: 2px;

  :before {
    content: "Wilhelm Willie";
    display: block;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.25);
    -webkit-text-fill-color: transparent;
    margin-bottom: 16px;
    letter-spacing: 2px;
  }

  :after {
    content: "Wilhelm Willie";
    display: block;
    -webkit-text-stroke: 2px ${({ theme }) => theme.color.emphasis};
    -webkit-text-fill-color: transparent;
    margin-top: 16px;
    letter-spacing: 2px;
  }
`;
