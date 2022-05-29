import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { getProductsByCategory } from "../../store/atom";
import ItemCard from "../ItemCard";

const Category = ({ category, categoryKo }) => {
  const productList = useRecoilValue(getProductsByCategory(category));

  return (
    <Section>
      <h2>{categoryKo}</h2>
      <ItemWrapper>
        <ItemList>
          {productList.slice(0, 4).map((product) => (
            <ItemCard product={product} key={product.id} />
          ))}
        </ItemList>
      </ItemWrapper>
    </Section>
  );
};

const Section = styled.section`
  width: 100vw;
  height: 630px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 8px 32px;
  gap: 32px;
  background: ${({ theme }) => theme.main.background};
  h2 {
    font-size: 36px;
    font-weight: 900;
    color: ${({ theme }) => theme.main.text};
  }
`;

const ItemWrapper = styled.div`
  width: 100%;
  overflow: scroll;
`;

const ItemList = styled.div`
  width: fit-content;
  display: flex;
  gap: 30px;
  margin: auto;
`;

export default Category;
