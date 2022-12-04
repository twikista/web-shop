import { NavBar } from "./NavBar/NavBar";
import {
  HeaderWrapper,
  Logo,
  Span,
  MenuWrapper,
  HeaderTop,
  LogoContainer,
} from "./Header.styles";
import { Cart } from "../CartWidget/CartWidget";
// import { Categories } from "../Categories/Categories";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const { pathname } = useLocation();

  console.log(pathname);
  return (
    <HeaderWrapper path={pathname}>
      <HeaderTop>
        <LogoContainer to="/">
          <Logo>
            Web<Span>Mart</Span>
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
