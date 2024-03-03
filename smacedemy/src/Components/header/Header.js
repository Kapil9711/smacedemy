import styled from "styled-components";
import Navbar from "./Navbar";

const HeaderWraper = styled.header`
  height: 100%;
  /* background-color: var(--clr-primary-dark-2); */
`;

const ContentWrapper = styled.div`
  height: 100%;
  & .manager {
    height: 100%;
    background-repeat: no-repeat;
    background: linear-gradient(hsl(0 50% 40% /0.6), hsl(0 50% 20% /0.7)),
      url("./images/manager.jpg");
    background-position: top;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 776px) {
      background-position: center;
      background: url("./images/manager.jpg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }

    @media (min-width: 1100px) {
      margin-left: -200px;
      background-position: top;
    }

    & .quotes {
      padding: 20px;
      margin-bottom: -500px;

      @media (min-width: 776px) {
        display: none;
      }

      & h1 {
        color: var(--clr-primary-light-8);
        font-size: 1.3rem;
        text-transform: capitalize;
      }
      & p {
        color: var(--clr-primary-light-10);
      }
    }
  }

  & .manager-quotes {
    display: none;
    height: 100%;
    background-color: var(--clr-primary-dark-6);
    font-style: italic;

    @media (min-width: 776px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    @media (min-width: 1100px) {
      clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%);
    }

    & .wrapper {
      max-width: 600px;
      text-transform: capitalize;
      color: var(--clr-primary-light-8);

      & h1 {
        font-size: 2.5rem;
      }
      & p {
        font-size: 1.2rem;
      }
    }
  }

  @media (min-width: 776px) {
    display: grid;
    grid-template-columns: 1.7fr 1fr;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1.9fr 1fr;
  }
`;

function Header() {
  return (
    <HeaderWraper id="home">
      <Navbar />
      <ContentWrapper>
        <div className="manager-quotes">
          <div className="wrapper">
            <h1>
              “I think about how we can provide what we would want for our own
              children
            </h1>
            <p>and what will continue to set our students up for success.</p>
            <p>We can’t negotiate with that.”</p>
          </div>
        </div>
        <div className="manager">
          <div className="quotes">
            <h1>
              “I think about how we can provide what we would want for our own
              children
            </h1>
            <p>and what will continue to set our students up for success”</p>
          </div>
        </div>
      </ContentWrapper>
    </HeaderWraper>
  );
}

export default Header;
