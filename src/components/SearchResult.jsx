import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { getProducts } from "../store/atom";
import { Link } from "react-router-dom";

const SearchResult = ({ searchResult, handleRearchResultReset }) => {
  return (
    <SearchResultWrapper>
      {searchResult.map((product) => (
        <li onClick={handleRearchResultReset}>
          <Link to={{ pathname: `/product/${product.id}` }}>
            {product.title}
          </Link>
        </li>
      ))}
    </SearchResultWrapper>
  );
};

const SearchResultWrapper = styled.ul`
  position: absolute;
  top: 56px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.card.background};
  color: ${({ theme }) => theme.main.text};
  overflow: scroll;
  padding: 12px;
  font-weight: bold;
  a {
    display: block;
    padding: 12px;
  }
`;

export default SearchResult;
