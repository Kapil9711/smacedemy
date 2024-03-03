import styled from "styled-components";

import NavList from "./NavList";
import { useState } from "react";

const Nav = styled.nav`
  position: fixed;
  background-color: var(--clr-primary-dark-5);
  width: 100%;
  padding: 20px 0;
  height: auto;
  transition: all 0.5s linear;
  z-index: 2;
  box-shadow: 0 10px 10px hsl(0 50% 10% /0.7);
`;

const NavContentWrapper = styled.div`
  margin: 0 auto;
  width: 90vw;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ImgDiv = styled.div`
  width: 150px;
  @media (min-width: 776px) {
    width: 200px;
  }
`;
const Button = styled.button`
  font-size: 2.3rem;
  color: var(--clr-primary-light-7);
  margin-left: 80px;
  margin-bottom: -15px;
  @media (min-width: 776px) {
    display: none;
  }
`;

const IconsWrapper = styled.div`
  display: none;
  font-size: 2rem;
  color: var(--clr-primary-light-8);
  align-self: end;
  justify-self: end;

  & i {
    margin-left: 20px;
  }
  @media (min-width: 960px) {
    display: initial;
  }
`;

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const btnClickHandler = () => {
    setIsActive((prev) => {
      setIsActive(!prev);
      console.log(isActive);
    });
  };

  return (
    <Nav>
      <NavContentWrapper>
        <ImgDiv>
          <img src="./images/main-logo.png" alt="" />
        </ImgDiv>
        <Button onClick={btnClickHandler}>
          <i class="fa-solid fa-bars"></i>
        </Button>
        <NavList isActive={isActive} />
        <IconsWrapper>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
        </IconsWrapper>
      </NavContentWrapper>
    </Nav>
  );
}

export default Navbar;
