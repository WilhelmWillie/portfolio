import Head from "next/head";

import Bio from "components/Bio";
import Footer from "components/Footer";
import Hero from "components/Hero";

const Home = () => {
  return (
    <>
      <Head>
        <title>Wilhelm Willie | Code, Design, and Product</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Hero />
      <Bio />
      <Footer />
    </>
  );
};

export default Home;
