const theme = {
  fontFamily: {
    serif: `'Arbutus Slab', serif`,
    sansSerif: `'Lato', sans-serif`,
  },
  fontSize: {
    small: "16px",
    default: "20px",
    medium: "24px",
    big: "32px",
    huge: "36px",
    large: "42px",
    xlarge: "52px",
    max: "64px",
    megaMax: "85px",
  },
  fontWeight: {
    light: "300",
    default: "400",
    bold: "700",
    black: "900",
  },
  color: {
    gray: "#545454",
    white: "#FFFFFF",
    lightGray: "#A2A2A2",
    grayBg: "#E0E0E0",
    border: "#DFDFDF",
    boldHeader: "#3C3C3C",
    subHeader: "#767676",
    emphasis: "#C55353",
    skill: "#FC8686",
  },
  media: {
    tablet: (style) => `
      @media screen and (max-width: 768px) {
        ${style}
      }
    `,
    mobile: (style) => `
      @media screen and (max-width: 425px) {
        ${style}
      }
    `,
  },
  layout: {
    width: 1024,
    sectionPadding: 64,
  },
};

export default theme;
