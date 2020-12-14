import { css } from "styled-components";

const typographyStyles = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${(p) => p.theme.fontFamily.slab};
  }

  p {
    line-height: 30px;
    font-size: 18px;
    margin-bottom: 18px;
  }

  h1 {
    font-size: 42px;
    font-weight: 700;
  }

  h2 {
    font-size: 32px;
    color: #3c4784;
    font-weight: 700;
  }

  a {
    color: #898989;
  }
`;

export default typographyStyles;
