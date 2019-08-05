import styled from "styled-components";

export default () => (
  <Hero>
    <HeroHeader>Wilhelm Willie</HeroHeader>
    <HeroSubtitle>Developer. USC Trojan.</HeroSubtitle>
  </Hero>
);

const Hero = styled.div`
  width: 100%;
  padding-top: 120px;
  padding-bottom: 120px;
  background-color: #0465e6;
  text-align: center;
`;

const HeroHeader = styled.h1`
  font-size: 32px;
  color: #ffffff;
  font-family: sans-serif;
`;

const HeroSubtitle = styled.h2`
  font-size: 24px;
  color: #ffffff;
  font-family: sans-serif;
`;
