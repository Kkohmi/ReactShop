import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { media } from "../../styles/styleUtil";
import CarouselContainer from "./carousel/CarouselContainer";
import SectionComponent from "./SectionComponent";

const Home = () => {
  return (
    <HomeWrapper>
      <CarouselContainer />
      <SectionComponent />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  margin-top: 64px;
`;

export default Home;
