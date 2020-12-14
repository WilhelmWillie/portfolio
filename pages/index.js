import Head from "next/head";

import Bio from "components/Bio";
import Footer from "components/Footer";
import Hero from "components/Hero";
import Work from "components/Work";

const Home = () => {
  return (
    <>
      <Head>
        <title>Wilhelm Willie | Building things 🚀</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Hero />
      <Bio />
      <Work />
      <Footer />
    </>
  );
};

export default Home;
