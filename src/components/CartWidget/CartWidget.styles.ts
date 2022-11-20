import styled from "styled-components";

export const CartWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex: 0.1;
  font-size: 1.2rem;
  cursor: pointer;
  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;

export const CartBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  background-color: rgb(251, 133, 0);
  border: solid 2px rgb(251, 133, 0);
  color: #fff;
  font-weight: 700;
  position: absolute;
  top: -8px;
  right: -8px;
  @media (max-width: 400px) {
    width: 18px;
    height: 18px;
  }
`;
