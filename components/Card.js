import styled from "styled-components";

const Card = ({ title, description, link, image }) => {
  return (
    <CardWrapper>
      <CardHeader>
        <h3>{title}</h3>
        <Description>{description}</Description>
      </CardHeader>

      <CardImage src={image} />

      <CardLink href={link}>View Project</CardLink>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`;

const CardHeader = styled.div`
  padding: 26px;
  flex-grow: 1;
`;

const Description = styled.p`
  font-size: 16px;
  margin-top: 16px;
  margin-bottom: 0;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
`;

const CardLink = styled.a`
  background: #9789f0;
  color: #ffffff;
  text-decoration: none;
  display: block;
  padding: 24px;
  text-align: center;
  font-size: 20px;
  transition: 0.15s all;

  &:hover {
    background: #8174d2;
  }
`;

export default Card;
