import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { getProductsByCategory } from "../../store/atom";
import ItemCard from "../ItemCard";
import { media } from "../../styles/styleUtil";

const Products = ({ category, categoryKo }) => {
  const productList = useRecoilValue(getProductsByCategory(category));

  return (
    <ProductsWrapper>
      <ProductsSection>
        <ul>
          <li>홈</li>
          <li>{categoryKo}</li>
        </ul>
        <h2>{categoryKo}</h2>

        <ItemList>
          {productList.map((product) => (
            <ItemCard product={product} response />
          ))}
        </ItemList>
      </ProductsSection>
    </ProductsWrapper>
  );
};

const ProductsWrapper = styled.div`
  margin-top: 64px;
  padding: 20px 8px 32px;
`;

const ProductsSection = styled.section`
  display: flex;
  flex-direction: column;

  h2 {
    width: 100%;
    text-align: center;
    font-size: 36px;
    color: ${({ theme }) => theme.main.text};
    font-weight: 900;
    margin-bottom: 32px;
    padding-top: 16px;
  }

  ul {
    display: flex;
    padding: 8px 0;
    li {
      font-size: 14px;
      color: ${({ theme }) => theme.main.text};
    }
    li + li::before {
      content: ">";
      padding: 0 8px;
    }
  }
`;

const ItemList = styled.div`
  max-width: 1360px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 25px;
  padding: 0 8px 32px;
  margin-bottom: 80px;
  @media (max-width: ${media.pc}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: ${media.tablet}) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export default Products;
