import { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { media } from "../../../styles/styleUtil";
import { BsCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

const Carousel = ({ children, width, height, delay }) => {
  const dots = Array(children.length).fill(0);
  const ref = useRef(null);
  const timer = useRef();
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (!delay) return;
    const timer = setInterval(() => {
      setPage((prev) => (prev + 1) % children.length);
    }, delay * 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    ref.current.style.transform = `translateX(-${page * width}vw)`;
  }, [page]);

  const handlePage = (nextPage) => {
    nextPage = nextPage >= 0 ? nextPage % children.length : children.length - 1;
    setPage(nextPage);
  };

  return (
    <CarouselWrapper length={children.length} width={width} height={height}>
      <LeftBtn onClick={() => handlePage(page - 1)}>
        <BsCaretLeftFill size={16} color={"white"} />
      </LeftBtn>
      <ul ref={ref}>{children}</ul>
      <RightBtn onClick={() => handlePage(page + 1)}>
        <BsFillCaretRightFill size={16} color={"white"} />
      </RightBtn>
      <DotBtns>
        {dots.map((_, index) => (
          <div
            key={index}
            className={`${index === page ? "active" : ""}`}
            onClick={() => handlePage(Number(index))}
          ></div>
        ))}
      </DotBtns>
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  position: relative;
  display: flex;
  width: ${({ width }) => `${width}vw`};
  height: ${({ height }) => `${height}px`};
  overflow: hidden;
  ul {
    width: ${({ width, length }) => `${width * length}px`};
    display: flex;
    transition: all 0.5s;
  }
  @media (max-width: ${media.pc}) {
    height: 220px;
  }
`;

const Button = styled.button`
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.1);
  outline: none;
  border: none;
  z-index: 1;
  cursor: pointer;
  transition: all 0.3s;

  svg {
    opacity: 0.5;
    transition: all 0.3s;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  &:hover svg {
    opacity: 1;
  }
`;

const LeftBtn = styled(Button)`
  left: 0;
`;

const RightBtn = styled(Button)`
  right: 0;
`;

const DotBtns = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 10px;
  z-index: 2;
  gap: 20px;
  justify-content: center;
  bottom: 3%;

  div {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: white;
    opacity: 0.5;
    transition: all 0.3s;
    cursor: pointer;
    &.active {
      opacity: 1;
    }
    &:hover {
      opacity: 1;
    }
  }
`;

export default Carousel;
