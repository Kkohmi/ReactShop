import { useRecoilState } from "recoil";
import styled from "styled-components";
import { cartState } from "../../store/atom";
import ButtonComponent from "../ButtonComponent";
import { media } from "../../styles/styleUtil";
import { useState } from "react";

const CartItemCard = ({ product }) => {
  const [cart, setCart] = useRecoilState(cartState);

  const handleAddCartItem = () => {
    const target = cart[product.id];
    setCart({ ...cart, [product.id]: { ...target, count: target.count + 1 } });
  };

  const handleRemoveCartItem = () => {
    const target = cart[product.id];
    const newState = {
      ...cart,
      [product.id]: { ...target, count: target.count - 1 },
    };
    newState[product.id].count <= 0 && delete newState[product.id];
    setCart(newState);
  };

  return (
    <CartItemCartWrapper>
      <ImgWrapper>
        <img src={product.image} alt={product.title} />
      </ImgWrapper>
      <TextInfoWrapper>
        <h2>{product.title}</h2>
        <p>${product.price}</p>
        <ButtonWrapper>
          <ButtonComponent onClick={handleRemoveCartItem}>-</ButtonComponent>
          <span>{product.count}</span>
          <ButtonComponent onClick={handleAddCartItem}>+</ButtonComponent>
        </ButtonWrapper>
      </TextInfoWrapper>
    </CartItemCartWrapper>
  );
};

const CartItemCartWrapper = styled.div`
  display: flex;
  border-radius: 10px;
  @media (max-width: ${media.pc}) {
    flex-direction: column;
    padding: 0 8px;
  }
`;

const ImgWrapper = styled.div`
  min-width: 224px;
  width: 224px;
  height: 224px;
  padding: 16px;

  background: white;
  overflow: hidden;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: ${media.pc}) {
    width: 100%;
    margin: 0 auto;
  }
`;

const TextInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 48px;
  gap: 20px;
  color: ${({ theme }) => theme.main.text};
  h2 {
    font-size: 20px;
    font-weight: bold;
    margin: 0;
  }
  p {
    font-size: 30px;
  }

  @media (max-width: ${media.pc}) {
    padding: 32px 4px;
  }
`;

const ButtonWrapper = styled.div`
  width: fit-content;
  display: flex;
  color: ${({ theme }) => theme.main.text};
  flex-basis: auto;
  button {
    width: 50px;
  }
  span {
    line-height: 48px;
    text-align: center;
    width: 50px;
  }
`;

export default CartItemCard;
