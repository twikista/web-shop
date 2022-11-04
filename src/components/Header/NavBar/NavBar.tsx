import React from "react";
import { NavWrapper, NavList, NavListItem, NavLinkItem } from "./NavBar.styles";
import { useGlobalContext } from "../../../state/context/GlobalContext";
import { setApiUrl } from "../../../state/reducers/actionCreators";

export const NavBar = () => {
  const { dispatch } = useGlobalContext();
  return (
    <NavWrapper flex="3">
      <NavList>
        <NavListItem>
          <NavLinkItem to="/">Home</NavLinkItem>
        </NavListItem>
        <NavListItem>
          <NavLinkItem
            to="/products/all"
            onClick={() =>
              dispatch(setApiUrl("https://fakestoreapi.com/products"))
            }
          >
            Products
          </NavLinkItem>
        </NavListItem>
        <NavListItem>
          <NavLinkItem to="/contact">Contact</NavLinkItem>
        </NavListItem>
      </NavList>
    </NavWrapper>
  );
};
