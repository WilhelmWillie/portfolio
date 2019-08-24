import styled from "styled-components";

import Text from "./Text";

export default () => (
  <Hero>
    <HeroContainer>
      <HeroText>
        <Text tag="h1" size="max" isSerif color="white">
          Wilhelm Willie
        </Text>
        <HeroSubheader tag="h2" size="big" weight="light" color="white">
          💻 code 🎨 design 🚀 product
        </HeroSubheader>
      </HeroText>
    </HeroContainer>
  </Hero>
);

const Hero = styled.div`
  width: 100%;
  padding-top: 140px;
  padding-bottom: 140px;
  background: #f27fbe;
  text-align: center;
  background: #6037a7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #6037a7,
    #283c7a
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #6037a7,
    #283c7a
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const HeroContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  align-items: center;
`;

const HeroText = styled.div`
  width: 100%;
  text-align: center;
`;

const HeroSubheader = styled(Text)`
  margin-top: 16px;
`;
