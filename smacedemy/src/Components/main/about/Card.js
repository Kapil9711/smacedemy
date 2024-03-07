import styled from "styled-components";

const Cardd = styled.div`
  background: var(--clr-primary-dark-5);

  text-align: center;
  color: var(--clr-primary-light-6);
  padding: 32px;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.4s linear;
  border-bottom: 16px solid var(--clr-primary-dark-7);

  @media (pointer: fine) {
    &:hover {
      background: transparent;
      color: var(--clr-primary-light-3);
      border-color: var(--clr-primary-dark-5);
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-color: var(--clr-primary-dark-7);
      transform: scaleY(0);
      transform-origin: bottom center;
      transition: all 0.4s ease-in-out;
    }

    &:hover::before {
      transform: scale(1);
    }
  }

  & i {
    font-size: 5rem;
    margin-bottom: 16px;
  }
  & h2 {
    font-size: 2.5rem;
  }
`;

function Card(props) {
  return (
    <Cardd>
      <i class={props.iconClass}></i>
      <h2>{props.title}</h2>
    </Cardd>
  );
}

export default Card;
