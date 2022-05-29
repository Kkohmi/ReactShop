import { useRecoilState } from "recoil";
import styled from "styled-components";
import { cartState } from "../../store/atom";
import ButtonComponent from "../ButtonComponent";

const ClearCartModal = ({ handleCloseClearCartModal }) => {
  const [cart, setCart] = useRecoilState(cartState);

  const handleCartClear = () => {
    setCart({});
    handleCloseClearCartModal();
  };
  return (
    <ModalWrapper>
      <Modal>
        <h3>정말로 구매하시겠습니까?</h3>
        <p>장바구니의 모든 상품들이 삭제됩니다.</p>
        <ModalBtnWrapper>
          <ButtonComponent onClick={handleCartClear}>네</ButtonComponent>
          <ButtonComponent onClick={handleCloseClearCartModal}>
            아니오
          </ButtonComponent>
        </ModalBtnWrapper>
      </Modal>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  @media (max-width: 640px) {
    align-items: flex-end;
  }
`;

const Modal = styled.div`
  max-width: 512px;
  width: 512px;
  background-color: ${({ theme }) => theme.main.background};
  color: ${({ theme }) => theme.main.text};
  padding: 24px;
  border-radius: 15px;

  h3 {
    height: 28px;
    line-height: 28px;
    font-size: 18px;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    padding: 16px 0;
    letter-spacing: -1px;
  }
  @media (max-width: 640px) {
    max-width: 100%;
    width: 100%;
  }
`;

const ModalBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  gap: 10px;
`;
export default ClearCartModal;
