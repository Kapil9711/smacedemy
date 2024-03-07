import styled from "styled-components";
import About from "./about/About";
import Features from "./features/Features";

const MainWrapper = styled.main``;

function Main() {
  return (
    <MainWrapper>
      <About />
      <Features />
    </MainWrapper>
  );
}

export default Main;
