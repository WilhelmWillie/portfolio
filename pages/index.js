import {
  About,
  Contact,
  Footer,
  Hero,
  LineBreak,
  Dope,
  Projects
} from "components";

const Landing = () => {
  return (
    <>
      <Hero />
      <Dope />
      <LineBreak />
      <About />
      <LineBreak />
      <Projects />
      <LineBreak />
      <Contact />
      <Footer />
    </>
  );
};

export default Landing;
