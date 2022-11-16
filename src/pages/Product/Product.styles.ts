import styled from "styled-components";

type TextProps = {
  size?: string;
  weight?: string;
  align?: string;
};
export type ButtonProps = {
  action: string;
};

export const ProductContainer = styled.section`
  width: 90%;
  min-height: calc(100vh - 75.39px - 50px);
  margin-top: 2rem;
  margin-bottom: 3rem;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 8rem 1fr;
  gap: 2rem;
  background-color: #fffffe;
  font-size: 1.6rem;
  @media (max-width: 480px) {
  }
`;

export const MainContent = styled.section`
  display: grid;
  grid-template-columns: 1.3fr 2fr;
  grid-template-rows: 100%;
  gap: 3rem;
  margin-bottom: 4rem;
  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    grid-template-rows: 400px 1fr;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-rows: 350px 1fr;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: min-max(250px, 100%);
  height: 100%;
`;

export const ProductImage = styled.img`
  width: 80%;
  height: 100%;
  object-fit: contain;
  object-position: auto 0;
  margin: 0 auto;
  @media (max-width: 860px) {
    /* object-position: 0 0; */
  }
`;

export const ProductDetailsWrapper = styled.article`
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.h3`
  font-weight: 700;
  font-size: 3rem;
  color: #f26323;
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  border-bottom: solid #d7d7d7 1px;
  display: flex;
  align-items: flex-end;
  text-align: left;
  padding-bottom: 0.5rem;
`;

export const LabelText = styled.span`
  font-size: 2rem;
  font-weight: 2rem;
  line-height: 1.6;
  text-align: ${({ align }: TextProps) => align || "left"};
  color: #011a20;
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const PriceText = styled.div`
  font-size: 3.6rem;
  color: #011a20;
  @media (max-width: 480px) {
    font-size: 2.6rem;
  }
`;

export const PriceWrapper = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem 1.5rem;
`;
export const ProductDetailsTop = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProductDetailsBottom = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  color: #011a20;
  p {
    font-size: 1.6rem;
    text-align: left;
    @media (max-width: 480px) {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 480px) {
    margin-top: 1rem;
    p {
      font-size: 1.4rem;
    }
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const QuantityWrapper = styled.div`
  text-align: left;
  margin-top: 3rem;
  color: #023846;
`;

export const Button = styled.button`
  padding: 14px 5px;
  transition: all 0.2s ease-in;

  &:hover {
    color: ${(props: ButtonProps) =>
      props.action === "increase" ? "#07d407" : "#f05108"};
    transform: scale(1.5);
  }
`;
export const Input = styled.input`
  padding: 14px 5px;
  text-align: center;
  color: #011a20;
`;

export const QuantityInput = styled.div`
  display: grid;
  grid-template-columns: 80px 140px 80px;
  border: solid #d7d7d7 1px;
  width: 300px;
  font-size: 1.8rem;
  margin-top: 0.5rem;
  @media (max-width: 860px) {
    grid-template-columns: 0.25fr 1fr 0.25fr;
    width: 100%;
  }
  @media (max-width: 480px) {
    grid-template-columns: 0.25fr 1fr 0.25fr;
    width: 100%;
    font-size: 1.4rem;
  }
`;

export const AddToCartButton = styled.button`
  width: 30rem;
  text-align: center;
  padding: 14px 0;
  background-color: #f26323;
  color: #fff;
  margin-top: 1rem;
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: capitalize;
  transition: all 0.3s ease;
  &:hover {
    color: #f26323;
    color: #fff;
    background-color: teal;
  }
  @media (max-width: 860px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;
