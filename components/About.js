import styled from "styled-components";

import Section from "./Section";

export default () => (
  <Section>
    <Sidebar>
      <h3>Wilhelm Willie</h3>

      <h4>University of Southern California</h4>
      <h4>Class of 2020</h4>
      <h4>Los Angeles, CA</h4>
    </Sidebar>

    <Main>
      <h2>
        FULL STACK ENGINEER WITH A PASSION FOR BUILDING GREAT PRODUCTS 🎉💥
      </h2>

      <p>
        I'm a tinkerer, a creative, and a builder. I enjoy working across the
        stack to produce great digital experiences from concept to production.
        I'm always down to talk about code, design, and product. Currently, I'm
        interested in exploring the intersection between software engineering
        and user experience design. Catch me in my room building wireframes and
        mockups in Sketch and building them out using my favorite frameworks!
        Feel free to contact me if you have any opportunities you'd like to
        discuss or if you just want to talk tech!
      </p>
    </Main>
  </Section>
);

const Sidebar = styled.div`
  display: flex;
  flex-basis: 30%;
  flex-direction: column;
`;

const Main = styled.div`
  display: flex;
  flex-basis: 70%;
  flex-direction: column;
`;
