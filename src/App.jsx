import { Suspense, useEffect, useState } from "react";
import GlobalStyles from "./styles/globalStyle";
import theme from "./styles/theme";
import styled, { css, ThemeProvider } from "styled-components";
import { Route, Routes, useLocation } from "react-router-dom";
import { getProducts } from "./store/atom";
import Loading from "./components/Loading";
import Header from "./components/Header";
import FooterComponent from "./components/FooterComponent";
import Home from "./components/home/Home";
import Products from "./components/Products/Products";
import ProductDetail from "./components/product/ProductDetail";
import Cart from "./components/cart/Cart";
import { useRecoilState } from "recoil";
import { themeState } from "./store/atom";

const App = () => {
  const [themeMode, setThemeMode] = useRecoilState(themeState);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleThemeMode = () => {
    setThemeMode(!themeMode);
  };

  return (
    <ThemeProvider theme={themeMode ? theme.light : theme.dark}>
      <Container themeMode={themeMode}>
        <GlobalStyles />
        <Header handleThemeMode={handleThemeMode} themeMode={themeMode} />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/fashion"
              element={<Products category={"clothing"} categoryKo={"패션"} />}
            />
            <Route
              path="/accessory"
              element={
                <Products category={"jewelery"} categoryKo={"악세서리"} />
              }
            />
            <Route
              path="/digital"
              element={
                <Products category={"electronics"} categoryKo={"디지털"} />
              }
            />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Suspense>
        <FooterComponent />
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 278px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.main.background};
  transition: all 0.3s;
`;

export default App;
