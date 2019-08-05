import styled from "styled-components";

const Landing = () => {
  return (
    <Hero>
      <HeroHeader>Wilhelm Willie</HeroHeader>
    </Hero>
  );
};

const Hero = styled.div`
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #0465e6;
  text-align: center;
`;

const HeroHeader = styled.h1`
  font-size: 24px;
  color: #ffffff;
  font-family: sans-serif;
`;

export default Landing;
