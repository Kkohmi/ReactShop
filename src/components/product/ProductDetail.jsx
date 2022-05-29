import { Link, useNavigate, useParams, useRoutes } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { cartState, getProductById } from "../../store/atom";
import { Rating } from "react-simple-star-rating";
import ButtonComponent from "../ButtonComponent";
import { media } from "../../styles/styleUtil";

const ProductDetail = () => {
  const { id } = useParams();
  const product = useRecoilValue(getProductById(id));
  const [cart, setCart] = useRecoilState(cartState);

  const HandleAddProduct = () => {
    const item = cart.hasOwnProperty(id)
      ? cart[product.id]
      : { ...product, count: 0 };

    setCart({ ...cart, [id]: { ...item, count: item.count + 1 } });
  };

  return (
    <ProductDetailWrapper>
      <ProductDetailSection>
        <ul>
          <li>{product.category.toUpperCase()}</li>
          <li>{product.title}</li>
        </ul>
        <ProductInfo>
          <figure>
            <img src={product.image} alt={product.title} />
          </figure>
          <TextInfo>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div className="rating">
              <Rating
                initialValue={product.rating.rate}
                size={25}
                readonly={true}
              />
              <span className="rating-text">
                {product.rating.rate} / {product.rating.count} 참여
              </span>
            </div>
            <p className="product-cost">${product.price}</p>
            <BtnWrapper>
              <ButtonComponent onClick={HandleAddProduct}>
                장바구니에 담기
              </ButtonComponent>
              <MoveToCart to={{ pathname: "/cart" }}>
                장바구니로 이동
              </MoveToCart>
            </BtnWrapper>
          </TextInfo>
        </ProductInfo>
      </ProductDetailSection>
    </ProductDetailWrapper>
  );
};

const ProductDetailWrapper = styled.div`
  margin: 64px auto;
  background: ${({ theme }) => theme.main.background};
  transition: all 0.3s;
`;

const ProductDetailSection = styled.section`
  margin: 0 auto;
  padding: 20px 8px 32px;
  display: flex;
  flex-direction: column;

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

const ProductInfo = styled.div`
  display: flex;
  margin: 56px auto;
  figure {
    width: 320px;
    height: 320px;
    padding: 16px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.img.background};
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .product-cost {
    font-size: 30px;
  }
  @media (max-width: ${media.pc}) {
    flex-direction: column;
    align-items: center;
    figure {
      width: 90%;
    }
  }
`;

const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding: 32px 48px;
  max-width: 1024px;
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
  color: ${({ theme }) => theme.main.text};

  h2 {
    font-size: 20px;
    font-weight: bold;
  }

  .rating-text {
    margin-left: 8px;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const MoveToCart = styled(Link)`
  height: 48px;
  font-size: 14px;
  padding: 0px 16px;
  line-height: 48px;
  border: 1px solid ${({ theme }) => theme.main.text};
  border-radius: 10px;
`;

export default ProductDetail;
