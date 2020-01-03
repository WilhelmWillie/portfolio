import Head from "next/head";

import { About, Hero, Dope } from "components";

const Landing = () => {
  return (
    <>
      <Head>
        <title>Wilhelm Willie | Code, Design, and Product</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Hero />
      <Dope />
      <About />
    </>
  );
};

export default Landing;
