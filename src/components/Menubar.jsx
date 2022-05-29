import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { css } from "styled-components";

const Menubar = ({ toggleMenuBar, handleCloseMenuBar }) => {
  const ref = useRef();

  const menuList = [
    { name: "패션", path: "/fashion" },
    { name: "액세서리", path: "/accessory" },
    { name: "디지털", path: "/digital" },
  ];

  useEffect(() => {
    if (toggleMenuBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [toggleMenuBar]);

  return (
    <MenubarWrapper
      onClick={(e) => handleCloseMenuBar(e, ref)}
      isOpen={toggleMenuBar}
    >
      <Menu ref={ref} isOpen={toggleMenuBar}>
        {menuList.map((menuInfo) => (
          <MenuList>
            <Link to={{ pathname: menuInfo.path }}>{menuInfo.name}</Link>
          </MenuList>
        ))}
      </Menu>
    </MenubarWrapper>
  );
};

const openAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  } 
  100% {
    transform: translateX(0);
  }
`;

const closeAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  } 
`;

const MenubarWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 10;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: all 0.5s;
`;

const Menu = styled.ul`
  position: absolute;
  width: 320px;
  height: 100%;
  padding: 16px;
  left: 0;
  background: ${({ theme }) => theme.main.background};
  color: ${({ theme }) => theme.main.text};
  animation: ${({ isOpen }) => (isOpen ? openAnimation : closeAnimation)} 0.5s;
`;

const MenuList = styled.li`
  height: 48px;
  padding: 12px 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export default Menubar;
