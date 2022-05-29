import Carousel from "./Carousel";
import styled from "styled-components";
import { media } from "../../../styles/styleUtil";
import fashion from "../../../asset/img_shop_fashion.jpeg";
import grocery from "../../../asset/img_shop_grocery.jpeg";
import digital from "../../../asset/img_shop_digital.jpeg";
import { BsArrowRight } from "react-icons/bs";

const CarouselContainer = () => {
  return (
    <>
      <Carousel delay={5} width={100} height={700}>
        <CarouselItem>
          <div>
            <span>물빠진 청바지!</span>
            <span>이제 막 도착한 패션 청바지를 구경해 보세요.</span>
            <button>
              바로가기
              <BsArrowRight />
            </button>
          </div>
          <img src={fashion} alt="fashion" />
        </CarouselItem>
        <CarouselItem>
          <div>
            <span>신속한 업무처리!</span>
            <span>다양한 디지털 상품을 둘러보세요.</span>
            <button>
              바로가기
              <BsArrowRight />
            </button>
          </div>
          <img src={digital} alt="digital" />
        </CarouselItem>
        <CarouselItem>
          <div>
            <span>신선한 식품!</span>
            <span>농장 직배송으로 더욱 신선한 식료품을 만나보세요.</span>
            <button>
              바로가기
              <BsArrowRight />
            </button>
          </div>
          <img src={grocery} alt="grocery" />
        </CarouselItem>
      </Carousel>
    </>
  );
};

const CarouselItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    padding: 40px 0;
    position: absolute;
    width: 80%;
    max-width: 1280px;
    z-index: 2;
    display: flex;

    flex-direction: column;
    color: white;
    span:first-child {
      font-size: 36px;
      font-weight: 900;

      @media (max-width: ${media.pc}) {
        font-size: 24px;
      }
    }
    span:nth-child(2) {
      padding: 8px 0;
    }

    button {
      display: flex;
      gap: 10px;
      align-items: center;
      padding: 0 15px;
      width: fit-content;
      margin-top: 12px;
      height: 48px;
      background-color: ${({ theme }) => theme.carouselBtn.background};
      color: white;
      font-weight: bold;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      @media (max-width: ${media.pc}) {
        height: 30px;
      }
    }
    @media (max-width: ${media.pc}) {
      width: 100%;
      padding-left: 40px;
    }
  }

  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    @media (max-width: ${media.pc}) {
      height: 220px;
    }
  }

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
  @media (max-width: ${media.pc}) {
    height: 220px;
  }
`;

export default CarouselContainer;
