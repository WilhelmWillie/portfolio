import styled from "styled-components";

import {
  About,
  Contact,
  Footer,
  Hero,
  Dope,
  Projects,
  Section
} from "components";

const Landing = () => {
  return (
    <>
      <Hero />
      <Dope />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Landing;
