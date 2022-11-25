import styled from "styled-components";
import { ButtonProps } from "../../components/CartItem/CartItem.styles";

type TextProps = {
  size?: string;
  weight?: string;
  align?: string;
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
    /* width: 100%; */
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
    grid-template-rows: 250px 1fr;
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
  /* min-width: 300px; */
  height: 100%;
  object-fit: contain;
  object-position: auto 0;
  /*border: solid 2px green;
  display: inline-block;*/
  margin: 0 auto;
  /* justify-content: center; */
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
    font-size: 2rem;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  border-bottom: solid #d7d7d7 1px;
  display: flex;
  align-items: flex-end;
  text-align: left;
  /* margin-bottom: 1rem; */
  padding-bottom: 0.5rem;
  /* margin-top: 1rem; */
  @media (max-width: 480px) {
    align-items: center;
  }
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

  /* display: block; */
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
  /* margin-top: 4rem; */
  height: 100%;
  /* border: solid purple 2px; */
  padding: 1rem 1.5rem;
`;
export const ProductDetailsTop = styled.div`
  /* border: solid red 1px; */
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProductDetailsBottom = styled.div`
  /* border: solid green 1px; */
  display: flex;
  flex-direction: column;
  height: 80%;
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
  /* align-items: center; */
  width: 100%;
  /* border: solid yellowgreen 1px; */
`;

export const QuantityWrapper = styled.div`
  text-align: left;
  margin-top: 3rem;
  color: #023846;
  /* @media (max-width: 480px) {
    font-size: 1.8rem;
  } */
  /* border: solid hotpink 1px; */
`;

export const Button = styled.button`
  /* border: solid #d7d7d7 1px; */
  padding: 14px 5px;
  transition: all 0.2s ease-in;

  &:hover {
    color: ${(props: ButtonProps) =>
      props.action === "increase" ? "#07d407" : "#f05108"};
    /* font-weight: 700; */
    transform: scale(1.5);
  }
`;
export const Input = styled.input`
  padding: 14px 5px;
  text-align: center;
  color: #011a20;
  /* width: 40px; */
`;

export const QuantityInput = styled.div`
  display: grid;
  grid-template-columns: 80px 140px 80px;
  border: solid #d7d7d7 1px;
  width: 300px;
  font-size: 1.8rem;
  /* padding: 1.5rem 0; */
  margin-top: 0.5rem;
  @media (max-width: 860px) {
    grid-template-columns: 0.25fr 1fr 0.25fr;
    /* padding: 0 2rem; */
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
  /* background-color: #2b7d8f; */
  color: #fff;
  margin-top: 1rem;
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: capitalize;
  transition: all 0.3s ease;
  &:hover {
    /* border: solid 2px #f26323; */
    color: #f26323;
    color: #fff;
    background-color: teal;
  }
  @media (max-width: 860px) {
    /* grid-template-rows: 350px 1fr; */
    width: 100%;
  }
  @media (max-width: 480px) {
    /* grid-template-rows: 350px 1fr; */
    width: 100%;
    font-size: 1.6rem;
  }
`;
