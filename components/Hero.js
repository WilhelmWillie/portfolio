import styled from "styled-components";

import Text from "./Text";
import Developer from "../assets/developer.svg";
import DotGrid from "../assets/dot_grid.svg";

export default () => (
  <Hero>
    <HeroContainer>
      <HeroText>
        <Text tag="h1" size="max" isSerif>
          Wilhelm Willie
        </Text>
        <Text tag="h2" size="big">
          code + design + product
        </Text>
      </HeroText>
      <HeroViz>
        <DotGridBG src={DotGrid} />
        <DeveloperHexagon src={Developer} />
      </HeroViz>
    </HeroContainer>
  </Hero>
);

const Hero = styled.div`
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  background: #f27fbe;
  text-align: center;
  background: #fc5c7d; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #6a82fb,
    #fc5c7d
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #6a82fb,
    #fc5c7d
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border-radius: 0 0 32px 32px;
  color: #ffffff;
`;

const HeroContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  align-items: center;
`;

const HeroText = styled.div`
  flex-basis: 50%;
  text-align: left;
`;

const HeroViz = styled.div`
  position: relative;
  flex-basis: 50%;
  text-align: right;
  display: flex;
  align-items: center;
  width: 100%;
`;

const DotGridBG = styled.img`
  margin-left: auto;
`;

const DeveloperHexagon = styled.img`
  position: absolute;
  left: 50px;
  top: 50%;
  margin-top: -127px;
`;
