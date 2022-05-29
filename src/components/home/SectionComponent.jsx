import styled from "styled-components";
import Category from "./Category";

const SectionComponent = () => {
  return (
    <Categories>
      <Category category={"clothing"} categoryKo={"패션"} />
      <Category category={"jewelery"} categoryKo={"액세서리"} />
      <Category category={"electronics"} categoryKo={"디지털"} />
    </Categories>
  );
};

const Categories = styled.div`
  padding: 40px 0 80px 0;
  background-color: ${({ theme }) => theme.main.background};
`;

export default SectionComponent;
