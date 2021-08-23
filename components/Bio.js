import styled from "styled-components";

import Container from "./layout/Container";

const Bio = () => {
  return (
    <BioWrapper>
      <BioContainer>
        <IntroP>
          Hey! I'm Wilhelm Willie - a San Francisco based engineer
        </IntroP>
        <p>
          TLDR: I'm a software engineer at Coinbase, a University of Southern
          California graduate. I did some internships at some great places
          (Coinbase, Salesforce, McKinsey Digital). I love technology, building
          products, and learning new things.
        </p>

        <p>
          I'm interested in crypto, finance, consumer social, sports, and the
          intersection of media and technology. Open to chat about all that and
          more, my DMs and inbox are open!
        </p>
      </BioContainer>
    </BioWrapper>
  );
};

const BioWrapper = styled.div`
  padding: ${(p) => p.theme.layout.sectionPadding}px 0;
`;

const BioContainer = styled(Container)`
  max-width: 800px;

  p {
    text-transform: lowercase;
  }
`;

const IntroP = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: #d97448;
`;

export default Bio;
