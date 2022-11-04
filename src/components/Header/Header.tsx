import { NavBar } from "./NavBar/NavBar";
import {
  HeaderWrapper,
  Logo,
  Span,
  MenuWrapper,
  HeaderTop,
  HeaderBottom,
  LogoContainer,
} from "./Header.styles";
import { Cart } from "../Cart/Cart";
// import { Categories } from "../Categories/Categories";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const { pathname } = useLocation();

  console.log(pathname);
  return (
    <HeaderWrapper path={pathname}>
      <HeaderTop>
        <LogoContainer to="/">
          <Logo>
            web<Span>shop</Span>
          </Logo>
        </LogoContainer>
        <MenuWrapper>
          <NavBar />
          <Cart />
        </MenuWrapper>
      </HeaderTop>
      {/* {pathname !== "/" && (
        <HeaderBottom>
          <Categories />
        </HeaderBottom>
      )} */}
    </HeaderWrapper>
  );
};
