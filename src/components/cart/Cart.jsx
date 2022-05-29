import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { cartState } from "../../store/atom";
import { useNavigate } from "react-router-dom";
import CartItemCard from "./CartItemCard";
import ButtonComponent from "../ButtonComponent";
import { media } from "../../styles/styleUtil";
import ClearCartModal from "./ClearCartModal";
import { useState } from "react";

const Cart = () => {
  const navigate = useNavigate();
  const cart = useRecoilValue(cartState);
  const [isClearModalOpen, setIsClearModalOpen] = useState(false);

  const handleMoveToShopping = () => {
    navigate("/", { replace: true });
  };

  const handleOpenClearCartModal = () => {
    setIsClearModalOpen(true);
  };

  const handleCloseClearCartModal = () => {
    setIsClearModalOpen(false);
  };

  const cartProduct = Object.values(cart);
  const totalCost = cartProduct
    .reduce((acc, cur) => acc + parseInt(cur.price) * cur.count, 0)
    .toLocaleString();

  return (
    <CartWrapper>
      {isClearModalOpen && (
        <ClearCartModal handleCloseClearCartModal={handleCloseClearCartModal} />
      )}
      <CartSection>
        <ul>
          <li>홈</li>
          <li>장바구니</li>
        </ul>
        {!cartProduct.length ? (
          <>
            <h2 className="cart-empty">장바구니에 물품이 없습니다.</h2>
            <ButtonComponent onClick={handleMoveToShopping}>
              담으러 가기
            </ButtonComponent>
          </>
        ) : (
          <CartMain>
            <ItemCardWrapper>
              {cartProduct.map((product) => (
                <CartItemCard product={product} />
              ))}
            </ItemCardWrapper>
            <TotalCost>
              <span>{`총 : $${totalCost}`}</span>
              <ButtonComponent onClick={handleOpenClearCartModal}>
                구매하기
              </ButtonComponent>
            </TotalCost>
          </CartMain>
        )}
      </CartSection>
    </CartWrapper>
  );
};

const CartWrapper = styled.div`
  margin: 64px auto;
  width: 100%;
`;

const CartSection = styled.section`
  max-width: 1360px;
  width: 100%;
  padding: 20px 8px 32px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  .cart-empty {
    margin: 56px 0 40px;
    font-size: 24px;
    font-weight: 400;
    color: ${({ theme }) => theme.main.text};
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

const ItemCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

const CartMain = styled.div`
  margin-top: 56px;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.main.text};
  @media (max-width: ${media.pc}) {
    flex-direction: column;
    padding: 0 8px;
  }
`;

const TotalCost = styled.div`
  min-width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  font-size: 24px;
  margin-top: 40px;
  button {
    margin-left: 20px;
  }
`;

export default Cart;
