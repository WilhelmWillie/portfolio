import styled from "styled-components";

import Container from "./layout/Container";

const Bio = () => {
  return (
    <BioWrapper>
      <BioContainer>
        <IntroP>I'm Wilhelm Willie - a San Francisco based web engineer</IntroP>
        <p>
          I’m a passionate builder of products, a lover of technology, and a
          sportsball enthusiast. Currently interested in crypto/blockchain,
          design systems, and UI/UX design.
        </p>
        <p>
          Currently @{" "}
          <a href="https://www.coinbase.com" target="_blank" rel="noreferrer">
            Coinbase
          </a>
          , helping build an open financial system.
        </p>
        <p>
          Previously: CS & Biz @{" "}
          <a href="https://www.usc.edu" target="_blank" rel="noreferrer">
            USC
          </a>{" "}
          (c/o 2020),{" "}
          <a href="https://www.coinbase.com" target="_blank" rel="noreferrer">
            Coinbase
          </a>{" "}
          intern (2019),{" "}
          <a href="https://www.salesforce.com" target="_blank" rel="noreferrer">
            Salesforce
          </a>{" "}
          intern (2018),{" "}
          <a
            href="https://www.mckinsey.com/business-functions/mckinsey-digital/careers/product-engineering"
            target="_blank"
            rel="noreferrer"
          >
            McKinsey Digital
          </a>{" "}
          intern (2017).
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
`;

const IntroP = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: #d97448;
`;

export default Bio;
