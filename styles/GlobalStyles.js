import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import typography from "./typography";

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    font-family: ${(p) => p.theme.fontFamily.serif};
  }

  ${typography}
`;

export default GlobalStyles;
