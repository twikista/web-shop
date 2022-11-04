import styled from "styled-components";
import { NavLink } from "react-router-dom";

type Props = {
  flex?: string;
  width?: string;
};

export const NavWrapper = styled.nav`
  display: flex;
  flex: ${({ flex }: Props) => flex || "1"};
  width: ${({ width }: Props) => width || "100%"};
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 680px) {
  }
`;
export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: inherit;
  max-width: 400px;
  @media (max-width: 400px) {
  }
`;

export const NavListItem = styled.li`
  @media (max-width: 400px) {
    margin-right: 1rem;
  }
`;

export const NavLinkItem = styled(NavLink)`
  color: rgb(2, 0, 36);
  font-size: 1.6rem;
  font-weight: 700;
  @media (max-width: 680px) {
    font-size: 1.4rem;
  }
  @media (max-width: 420px) {
    /* font-size: 1.2rem; */
  }
  &:visited {
    color: rgb(0, 48, 73);
  }
`;
