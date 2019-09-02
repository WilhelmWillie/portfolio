import styled from "styled-components";

const Text = ({
  tag,
  size,
  mobileSize,
  weight,
  isSerif,
  children,
  ...props
}) => {
  return (
    <StyledText
      as={tag}
      size={size}
      mobileSize={mobileSize}
      weight={weight}
      isSerif={isSerif}
      {...props}
    >
      {children}
    </StyledText>
  );
};

const SectionTitle = styled(Text).attrs({
  tag: "h3",
  size: "medium",
  weight: "light",
  color: "lightGray"
})`
  text-transform: uppercase;
`;

const SectionHeader = styled(Text).attrs({
  tag: "h2",
  size: "large",
  mobileSize: "medium",
  isSerif: true
})`
  margin-top: 18px;
`;

const Body = styled(Text).attrs({
  weight: "light",
  tag: "p"
})`
  line-height: 1.56em;
`;

const StyledText = styled.div`
  color: ${({ theme, color }) =>
    color ? theme.color[color] : theme.color.gray};
  font-family: ${({ theme, isSerif }) =>
    isSerif ? theme.fontFamily.serif : theme.fontFamily.sansSerif};
  font-size: ${({ theme, size }) =>
    size ? theme.fontSize[size] : theme.fontSize.default};
  font-weight: ${({ theme, weight }) =>
    weight ? theme.fontWeight[weight] : theme.fontWeight.default};

  ${({ theme, mobileSize }) => theme.media.mobile`
    ${() => {
      console.log(mobileSize);
    }}
    ${mobileSize && `font-size: ${{ mobileSize }}`};
  `}
`;

export { SectionTitle, SectionHeader, Body };
export default Text;
