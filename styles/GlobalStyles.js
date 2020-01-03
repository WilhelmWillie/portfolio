import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    font-family: ${({ theme }) => theme.fontFamily.sansSerif};
  }
`;

export default GlobalStyles;
