import styled from "styled-components";
import Card from "./Card";

// styled component

const CardWrapper = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  @media (min-width: 550px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  @media (min-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
`;

// card details

const cardDetails = [
  { iconClass: "fa-solid fa-address-card", title: "About Us" },
  { iconClass: "fa-solid fa-chalkboard-user", title: "Staff" },
  { iconClass: "fa-solid fa-house", title: "Enroll" },
  { iconClass: "fa-solid fa-seedling", title: "Grow" },
];

function Cards() {
  return (
    <CardWrapper>
      {cardDetails.map((ele) => (
        <Card iconClass={ele.iconClass} title={ele.title} />
      ))}
    </CardWrapper>
  );
}

export default Cards;
