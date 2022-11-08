import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  color: #f0f5fd;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  box-shadow: 0px 2px 6px 6px rgba(0, 0, 0, 0.09);
`;

export const Socials = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 300px;
  @media (max-width: 480px) {
    width: 260px;
  }
`;

export const SocialsItem = styled.li``;

export const SocialsIconWrapper = styled(Link)`
  display: flex;
  align-items: center;
  width: 30px;
  height: 30px;
  border: solid 2px #023846;
  border-radius: 50%;
  padding: 0.5rem;
  color: #023846;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: #023846;
    svg {
      color: #fff;
    }
  }
  svg {
    font-size: 2.5rem;
  }
`;
