import styled from "styled-components";

import Container from "./layout/Container";
import Card from "./Card";

const WORK_ITEMS = [
  {
    title: "Harbor Health",
    description:
      "PoC of a health monitoring platform that helps hospitals monitor staff health",
    link: "/project/harbor-health",
    image: "http://via.placeholder.com/800x600",
  },
  {
    title: "URGLOWIN",
    description: "Curated skincare product recommendations for your skin",
    link: "/project/urglowin",
    image: "http://via.placeholder.com/800x600",
  },
  {
    title: "Odyssey",
    description: "Hackathon management platform, built for HackSC 2020",
    link: "/project/odyssey",
    image: "http://via.placeholder.com/800x600",
  },
  {
    title: "Choose for Me",
    description: "Platform for crowdsourced anonymous polls",
    link: "/project/choose-for-me",
    image: "http://via.placeholder.com/800x600",
  },
  {
    title: "Livesafe LA",
    description: "LA is dope. Crime isn't. Built for TreeHacks 2019",
    link: "/project/livesafe-la",
    image: "http://via.placeholder.com/800x600",
  },
  {
    title: "AuxQ",
    description:
      "Crowdsource the aux cord with collaborative, real-time playlists",
    link: "/project/auxq",
    image: "http://via.placeholder.com/800x600",
  },
  {
    title: "Snapdrop",
    description: '"Yelp for Photo Spots" - find spots for great opportunities',
    link: "/project/snapdrop",
    image: "http://via.placeholder.com/800x600",
  },
  {
    title: "SwipeX",
    description:
      'Literally Tinder for "X" - swipe for whatever your heart desires',
    link: "/project/swipex",
    image: "http://via.placeholder.com/800x600",
  },
  {
    title: "Listed",
    description:
      "Made for list lvoers - community and platform to share lists of content",
    link: "/project/listed",
    image: "http://via.placeholder.com/800x600",
  },
  {
    title: "Kit",
    description:
      "Startup MVP - web platform built for makeup influencers and enthusiasts",
    link: "/project/kit",
    image: "http://via.placeholder.com/800x600",
  },
  {
    title: "Wilbur",
    description: "Fun Twitter bot programmed with various commands",
    link: "/project/wilbur",
    image: "http://via.placeholder.com/800x600",
  },
];

const Work = () => {
  const Cards = WORK_ITEMS.map(({ title, description, link, image }, index) => (
    <Card
      title={title}
      description={description}
      link={link}
      image={image}
      key={`card-${index}`}
    />
  ));

  return (
    <WorkWrapper>
      <Container>
        <Heading>Work</Heading>

        <Blurb>
          I’m a tinkerer who likes building things every once in a while. Check
          out some of the personal projects I’ve worked on over the years
          ranging from Twitter bots to web apps to beyond.
        </Blurb>

        <CardGrid>{Cards}</CardGrid>
      </Container>
    </WorkWrapper>
  );
};

const WorkWrapper = styled.div`
  padding: ${(p) => p.theme.layout.sectionPadding}px 0;
  background: #f4f5f6;
  border-top: 1px solid #dcdcdc;
`;

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 24px;
`;

const Blurb = styled.p`
  max-width: 800px;
  margin: 0 auto;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
  margin-top: 54px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default Work;
