import styled from "styled-components";
import { Link } from "react-router-dom";
import { css } from "styled-components";

const ItemCard = ({ product, response }) => {
  const { title, image, price } = product;
  return (
    <ItemWrapper
      to={{ pathname: `/product/${product.id}` }}
      response={response}
    >
      <ImageWrapper>
        <img src={image} alt={title} />
      </ImageWrapper>
      <InfoWrapper>
        <p>{title}</p>
        <span>{`$${price}`}</span>
      </InfoWrapper>
    </ItemWrapper>
  );
};

const ItemWrapper = styled(Link)`
  ${({ response }) =>
    response
      ? css`
          max-width: 400px;
        `
      : css`
          width: 310px;
        `}
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 10px;

  &:hover img {
    transform: scale(1.3);
  }
`;

const ImageWrapper = styled.div`
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.img.background};
  img {
    width: 120px;
    object-fit: contain;
    transition: all 0.3s;
  }
`;

const InfoWrapper = styled.div`
  flex-grow: 1;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-end-start-radius: 10px;
  border-end-end-radius: 10px;
  gap: 10px;
  background-color: ${({ theme }) => theme.card.background};
  color: ${({ theme }) => theme.main.text};
  p {
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5rem;
    margin-bottom: 12px;
  }
  span {
    font-weight: 600;
  }
`;

export default ItemCard;
