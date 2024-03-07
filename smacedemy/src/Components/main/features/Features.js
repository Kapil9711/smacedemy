import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  background-color: var(--clr-primary-dark-6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Features() {
  return (
    <Section id="features">
      <h1>this is features section</h1>
    </Section>
  );
}

export default Features;
