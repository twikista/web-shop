import styled from "styled-components";
import { Link } from "react-router-dom";

type Props = {
  path?: string;
  spanColor?: string;
};

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f0f5fd;
  width: 100%;
  padding: ${({ path }: Props) =>
    path === "/" ? "0.5rem 3rem" : "1.5rem 3rem"};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.09);

  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;

export const LogoContainer = styled(Link)`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 680px) {
    flex: 0.4;
  }
`;
export const Logo = styled.span`
  color: #2b7d8f;
  width: 70px;
  font-size: 2.5rem;
  font-weight: 700;
  span {
    color: red;
    color: #ffab00;
  }
  @media (max-width: 680px) {
    font-size: 2rem;
  }

  @media (max-width: 420px) {
    font-size: 1.8rem;
  }
`;
export const Span = styled.span`
  color: ${({ spanColor }: Props) => spanColor || "white"};
`;

export const HeaderTop = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  width: inherit;
  align-items: center;
  width: 100%;
  gap: 1rem;
  padding: 1rem 0;
`;

export const HeaderBottom = styled.div`
  display: flex;
  width: inherit;
  justify-content: center;
  height: 20px;
  color: rgb(2, 0, 36);
  padding: 0 70px;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 0.5rem;
`;
