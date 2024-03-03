import styled from "styled-components";

const A = styled.a`
  display: block;
  color: var(--clr-primary-light-10);
  font-size: 1.4rem;
  padding: 8px 0;
  margin-bottom: 5px;
  text-transform: uppercase;
  padding: 8px 16px;
  border-radius: 0 30px 0 30px;
  transition: all 0.3s ease-in-out;

  &:active {
    text-decoration: underline;
    color: var(--clr-primary-light-5);
  }

  @media (pointer: fine) {
    &:hover {
      background-color: var(--clr-primary-light-5);
      color: var(--clr-primary-dark-1);

      font-weight: bold;
    }
  }

  @media (min-width: 776px) {
    &:active {
      text-decoration: none;
      transform: translateY(0);
    }
  }
`;

const UL = styled.ul`
  @media (min-width: 776px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: -16px;
  }
`;

function NavList(props) {
  const ListWrapper = styled.div`
    margin-left: -16px;
    display: ${props.isActive ? `initial` : `none`};

    @media (min-width: 776px) {
      display: initial;
      max-width: 600px;
      align-self: center;
      justify-self: center;
    }
  `;

  return (
    <ListWrapper>
      <UL>
        <li>
          <A href="#home">home </A>
        </li>
        <li>
          <A href="#about">about </A>
        </li>
        <li>
          <A href="#features">features</A>
        </li>
        <li>
          <A href="#gallery">gallery </A>
        </li>
      </UL>
    </ListWrapper>
  );
}

export default NavList;
