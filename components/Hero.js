import styled from "styled-components";

export default () => (
  <Hero>
    <HeroHeader>wilhelm willie</HeroHeader>
    <HeroSubtitle>code + design + product</HeroSubtitle>
  </Hero>
);

const Hero = styled.div`
  width: 100%;
  padding-top: 160px;
  padding-bottom: 160px;
  background: #f27fbe;
  text-align: center;
`;

const HeroHeader = styled.h1`
  font-size: 42px;
  color: #ffffff;
`;

const HeroSubtitle = styled.h2`
  font-size: 24px;
  color: #ffffff;
`;
