import Head from "next/head";

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
      <Head>
        <title>Wilhelm Willie | code + design + product</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

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
