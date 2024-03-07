import styled from "styled-components";

const MaxContentWrapper = styled.div`
  max-width: 1000px;
  text-align: center;
  padding: 60px 0;
  margin: 0 auto;

  & h2 {
    text-transform: capitalize;
    box-shadow: 0 6px var(--clr-primary-dark-5);

    margin: 0 auto;
    margin-bottom: 16px;
    max-width: fit-content;

    & strong {
      color: var(--clr-primary-dark-2);
      margin-top: 10px;
      display: block;
    }
  }

  & p {
    margin: 0 auto;
    max-width: 550px;
    text-transform: capitalize;
    font-size: 0.876rem;
    color: var(--clr-primary-dark-2);
  }
`;

function Greetings() {
  return (
    <MaxContentWrapper className="max-content-wrapper">
      <h2>
        welcome to <br />
        <strong>Satyawati Memorial Acedemy</strong>
      </h2>
      <p>
        the mission of <strong>S.M. Acedemy</strong> is to empower our childern
        to achive thier greatest potential both as student and as member of
        their communities.
      </p>
    </MaxContentWrapper>
  );
}

export default Greetings;
