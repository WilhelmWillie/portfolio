import styled from "styled-components";

import Container from "./layout/Container";

const Bio = () => {
  return (
    <BioWrapper>
      <Container>
        <h2>I'm Wilhelm Willie</h2>

        <p>
          I’m a passionate builder of products, a lover of technology, and a
          sportsball enthusiast. Currently interested in crypto/blockchain,
          design systems, and UI/UX design.
        </p>
        <p>Currently @ Coinbase, helping build an open financial system.</p>
        <p>
          Previously: CS & Biz @ USC (c/o 2020), Coinbase intern (2019),
          Salesforce intern (2018), McKinsey Digital intern (2017).
        </p>
      </Container>
    </BioWrapper>
  );
};

const BioWrapper = styled.div`
  padding: ${(p) => p.theme.layout.sectionPadding}px;
`;

export default Bio;
