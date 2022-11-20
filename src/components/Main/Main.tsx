import React, { ReactNode } from "react";
import { useGlobalContext } from "../../state/context/GlobalContext";
import { MiniCart } from "../Minicart/MiniCart";
import { StyledMain } from "./Main.styles";
type MainType = {
  children: ReactNode;
};

export const Main = ({ children }: MainType) => {
  const {
    state: { cartIsOpen },
  } = useGlobalContext();
  return (
    <StyledMain>
      {cartIsOpen && <MiniCart />}
      {children}
    </StyledMain>
  );
};
