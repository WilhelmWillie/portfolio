import styled from "styled-components";

import Container from "./layout/Container";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <p>
          Wilhelm Willie.
          <br />
          &copy; 2020.
        </p>

        <p>
          <a
            href="https://www.twitter.com/wilhelm_willie"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          <Bullet>&bull;</Bullet>
          <a
            href="https://www.github.com/wilhelmwillie"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <Bullet>&bull;</Bullet>
          <a
            href="https://www.linkedin.com/in/wilhelmwillie"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </Container>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background: #3d3333;
  padding: 88px 0;
  color: #ffffff;
  text-align: center;

  a {
    color: #ffffff;
  }
`;

const Bullet = styled.span`
  margin: 0 8px;
`;
export default Footer;
