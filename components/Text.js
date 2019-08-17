import styled from "styled-components";

export default ({ tag, size, weight, isSerif, children }) => {
  return (
    <Text as={tag} size={size} weight={weight} isSerif={isSerif}>
      {children}
    </Text>
  );
};

const Text = styled.div`
  font-family: ${({ theme, isSerif }) =>
    isSerif ? theme.fontFamily.serif : theme.fontFamily.sansSerif};
  font-size: ${({ theme, size }) =>
    size ? theme.fontSize[size] : theme.fontSize.default};
  font-weight: ${({ theme, weight }) =>
    weight ? theme.fontWeight[weight] : theme.fontWeight.default};
`;
