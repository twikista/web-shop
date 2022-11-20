import styled from "styled-components";

type ItemProps = {
  displayDirection?: string;
};

type TextSpanProps = {
  alignText?: string;
  textSize?: string;
  textMargin?: string;
  textPadding?: string;
  height?: string;
  fontWeight?: string;
  color?: string;
};

export type ButtonProps = {
  action: string;
};

export const MinicartItem = styled.article`
  display: flex;
  height: 100%;
  padding: 5px 5px;
  width: 90%;
  margin: 0 auto;
  gap: 1rem;
  color: #555;
  /* &:not(:first-child) {
    border: solid #e9e9e9 1px;
  } */
  border: solid 1px #ddd;
  border-radius: 2px;
  /* background-color: #f8f8f8; */
`;
export const ImageWrapper = styled.div`
  height: 100%;
  width: 65px;
  @media (max-width) {
  }
  /* border: solid green 1px; */
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* border: solid pink 2px; */
`;

export const ProductDetails = styled.div`
  display: flex;
  flex: 1;
  flex-direction: ${({ displayDirection }: ItemProps) =>
    displayDirection || "row"};
  align-items: space-between;
  height: 100%;
  gap: 0.3rem;
`;

export const TextSpan = styled.span`
  text-align: ${({ alignText }: TextSpanProps) => alignText};
  font-size: ${({ textSize }: TextSpanProps) => textSize};
  height: ${({ height }: TextSpanProps) => height};
  font-weight: ${({ fontWeight }: TextSpanProps) => fontWeight};
  color: ${({ color }: TextSpanProps) => color};
  /* border: solid red 1px; */
  span {
    font-size: 1.2rem;
    color: #555;
  }
`;

//
export const QuantityWrapper = styled.div`
  display: grid;
  grid-template-columns: 50px 100px 50px;
  border: solid #d7d7d7 1px;
  border-radius: 2px;
  justify-content: center;
  /* width: 200px; */
`;

export const Button = styled.button`
  /* border: solid #d7d7d7 1px; */
  padding: 5px 10px;
  &:hover {
    color: ${(props: ButtonProps) =>
      props.action === "increase" ? "#07d407" : "#f05108"};
    font-weight: 700;
  }
`;
