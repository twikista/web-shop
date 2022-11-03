import React, { ReactNode } from "react";
import { StyledMain } from "./Main.styles";
type MainType = {
  children: ReactNode;
};

export const Main = ({ children }: MainType) => {
  return <StyledMain>{children}</StyledMain>;
};
