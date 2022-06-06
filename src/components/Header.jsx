import styled from "styled-components";
import theme from "../styles/theme";
import { MdOutlineWbSunny, MdOutlineShoppingBag, MdMenu } from "react-icons/md";
import { BiMoon } from "react-icons/bi";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { cartState, getProducts } from "../store/atom";
import Menubar from "./Menubar";
import SearchResult from "./SearchResult";

const Header = ({ handleThemeMode, themeMode }) => {
  const [layout, setLayout] = useState(null);
  const [toggleMenuBar, setToggleMenuBar] = useState(false);
  const products = useRecoilValue(getProducts);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const history = useNavigate();
  const cart = useRecoilValue(cartState);

  useEffect(() => {
    handleLayout();
    window.addEventListener("resize", handleLayout);
    return () => window.removeEventListener("resize", handleLayout);
  }, []);

  useEffect(() => {
    if (!searchKeyword) setSearchResult([]);
    else {
      setSearchResult(
        products.filter((product) => product.title.includes(searchKeyword))
      );
    }
  }, [searchKeyword]);

  const handleCartLink = () => {
    history("/cart");
  };

  function handleLayout() {
    if (window.innerWidth >= 1024) {
      setLayout("pc");
    } else if (window.innerWidth >= 768) {
      setLayout("tablet");
    } else {
      setLayout("mobile");
    }
  }

  const handleCloseMenuBar = (e, ref) => {
    if (e.target === ref.current) return;
    setToggleMenuBar(false);
  };

  const handleOpenMenuBar = (e) => {
    setToggleMenuBar(true);
  };

  const handleRearchResultReset = () => {
    setSearchKeyword("");
    setSearchResult([]);
  };

  return (
    <Navbar>
      <Menubar
        toggleMenuBar={toggleMenuBar}
        handleCloseMenuBar={handleCloseMenuBar}
      />

      <div className="nav-wrapper">
        {(layout === "mobile" || layout === "tablet") && (
          <ToggleBtn onClick={handleOpenMenuBar}>
            <MdMenu size={24} />
          </ToggleBtn>
        )}
        <h1>
          <Link to={{ pathname: "/" }}>React Shop</Link>
        </h1>
        {(layout === "pc" || layout === "tablet") && (
          <Nav>
            <ul>
              <li>
                <Link to={{ pathname: "/fashion" }}>패션</Link>
              </li>
              <li>
                <Link to={{ pathname: "/accessory" }}>액세서리</Link>
              </li>
              <li>
                <Link to={{ pathname: "/digital" }}>디지털</Link>
              </li>
            </ul>
          </Nav>
        )}
        <EtcBar>
          <button>
            {themeMode ? (
              <BiMoon size={28} onClick={handleThemeMode} />
            ) : (
              <MdOutlineWbSunny
                size={28}
                onClick={handleThemeMode}
                fill={"white"}
              />
            )}
          </button>
          <div>
            <input
              type="text"
              placeholder="검색"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            {searchResult.length !== 0 && (
              <SearchResult
                searchResult={searchResult}
                handleRearchResultReset={handleRearchResultReset}
              />
            )}
          </div>
          <button onClick={handleCartLink}>
            <div className="shopping-count">{Object.keys(cart).length}</div>
            <MdOutlineShoppingBag
              size={28}
              fill={themeMode ? "black" : "white"}
            />
          </button>
        </EtcBar>
      </div>
    </Navbar>
  );
};

const Navbar = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 64px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 10px 0px;
  background: ${({ theme }) => theme.header.background};
  z-index: 10;

  .nav-wrapper {
    display: flex;
    max-width: 1360px;
    width: 100%;
    padding: 8px;
  }

  h1 {
    font-size: 18px;
    font-weight: 900;
    margin: auto 0;
    padding: 0 8px;
    color: ${({ theme }) => theme.header.text};
  }
`;

const Nav = styled.nav`
  margin-left: 8px;
  ul {
    height: 100%;
    display: flex;
    align-items: center;
    li {
      padding: 6px 12px;
      border-radius: 3px;
      a {
        font-size: 14px;
        font-weight: bold;
        color: ${({ theme }) => theme.header.text};
      }
    }
    li:hover {
      background-color: ${({ theme }) => theme.input.background};
    }
  }
`;

const EtcBar = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: auto;
  div {
    position: relative;
    input {
      height: 48px;
      width: 222px;
      border: none;
      outline: none;
      border-radius: 5px;
      padding: 0 16px;
      background-color: ${({ theme }) => theme.input.background};
    }
  }

  button {
    position: relative;
    width: 48px;
    height: 48px;
    background-color: inherit;
    border: none;
    cursor: pointer;

    .shopping-count {
      position: absolute;
      right: 2px;
      top: 2px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: red;
      color: white;
    }
  }
`;

const ToggleBtn = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    fill: ${({ theme }) => theme.header.text};
  }
`;

export default Header;
