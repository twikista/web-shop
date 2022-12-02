import styled from "styled-components";

type TextSpanProps = {
  alignText?: string;
  fontSize?: number;
  textMargin?: string;
  textPadding?: string;
  height?: string;
  fontWeight?: string;
  color?: string;
  flex?: number;
};

export type ButtonProps = {
  action: string;
};

export const CartItemWrapper = styled.li`
  display: flex;
  height: 100%;
  padding: 1rem 0;
  width: 100%;
  align-items: center;
  gap: 1rem;
  color: #555;
  border-bottom: solid 1px #ddd;
  border-radius: 2px;
  position: relative;
`;

export const Product = styled.div`
  flex: 3;
  height: 100%;
  display: flex;
  gap: 1rem;
  @media (max-width: 480px) {
    flex: 3;
    gap: 0.5;
  }
`;

export const ImageWrapper = styled.div`
  height: 100%;
  min-width: 65px;
  max-width: 65px;

  @media (max-width: 680px) {
    min-width: 50px;
    max-width: 50px;
  }
  @media (max-width: 480px) {
    max-width: 40px;
    min-width: 40px;
  }
  @media (max-width: 320px) {
    max-width: 30px;
    min-width: 30px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const ProductTitle = styled.div`
  flex: 1;
`;

export const Price = styled.div`
  flex: 1;
`;

export const Quantity = styled.div`
  flex: 1;
`;

export const Total = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0.4;
`;

export const CloseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #ddd;
  border-radius: 3px;
  height: 30px;
  width: 30px;
  font-weight: 500;
  transition: all 0.3s ease;
  &:hover {
    background-color: #555;
    color: #fff;
  }
  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
    font-size: 1rem;
  }
`;

export const TextSpan = styled.span`
  text-align: left;
  font-size: 1.6rem;
  height: ${({ height }: TextSpanProps) => height};
  font-weight: ${({ fontWeight }: TextSpanProps) => fontWeight};
  color: ${({ color }: TextSpanProps) => color};
  color: ${({ flex }: TextSpanProps) => flex};
  @media (max-width: 680px) {
    font-size: 1.4rem;
  }
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
  @media (max-width: 420px) {
    font-size: 1rem;
  }
  @media (max-width: 340px) {
    font-size: 0.9rem;
  }
  @media (max-width: 300px) {
    font-size: 0.8rem;
  }
`;

//
export const QuantityWrapper = styled.div`
  display: flex;
  width: 100;
  border: solid #d7d7d7 1px;
  border-radius: 2px;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  width: 40%;
  padding: 3px 3px;
  &:hover {
    color: #555;
    font-weight: 500;
  }
  @media (max-width: 680px) {
    font-size: 1.4rem;
  }
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
  @media (max-width: 380px) {
    font-size: 1rem;
  }
`;
