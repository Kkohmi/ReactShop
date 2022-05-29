import styled from "styled-components";

const ButtonComponent = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

const Button = styled.button`
  width: fit-content;
  height: 48px;
  font-size: 14px;
  padding: 0px 16px;
  font-weight: bold;
  line-height: 48px;
  background-color: #510be8;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
export default ButtonComponent;
