import styled from "styled-components";
import Greetings from "./Greetings";
import Cards from "./Cards";
// =============
// styled Component
// =============

const Section = styled.section`
  padding: 40px 16px;
  min-height: 100vh;
  background-color: var(--clr-primary-light-7);
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

function About() {
  return (
    <Section id="about">
      <Greetings />
      <Cards />
    </Section>
  );
}

export default About;
