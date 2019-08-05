import styled from "styled-components";

const Landing = () => {
  return (
    <>
      <Hero>
        <HeroHeader>Wilhelm Willie</HeroHeader>
      </Hero>

      <Section>
        <h1>I build dope shit</h1>
      </Section>

      <Section>
        <h2>
          FULL STACK ENGINEER WITH A PASSION FOR BUILDING GREAT PRODUCTS 🎉💥
        </h2>

        <p>
          I'm a tinkerer, a creative, and a builder. I enjoy working across the
          stack to produce great digital experiences from concept to production.
          I'm always down to talk about code, design, and product. Currently,
          I'm interested in exploring the intersection between software
          engineering and user experience design. Catch me in my room building
          wireframes and mockups in Sketch and building them out using my
          favorite frameworks! Feel free to contact me if you have any
          opportunities you'd like to discuss or if you just want to talk tech!
        </p>
      </Section>

      <Section>
        <h2>Like what you see?</h2>
      </Section>
    </>
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

const Section = styled.div`
  width: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
`;

export default Landing;
