import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductWrapper = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  border: solid 1px #ddd;
`;

export const ImageWrapper = styled.div`
  height: 65%;
  border-bottom: solid #ddd 1px;
  padding: 1rem 1.5rem;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  height: 35%;
  text-align: left;
`;

export const ProductTitleWrapper = styled.div`
  font-size: 1.6rem;
  height: 60%;
  display: flex;
  align-items: flex-start;
  padding: 0.5rem 1rem;
  @media (max-width: 480px) {
    font-size: 1.4rem;
  }

  @media (max-width: 360px) {
    font-size: 1.2rem;
  }
`;

export const ProductTitle = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
  color: #023846;
`;

export const PriceWrapper = styled.div`
  height: 40%;
  line-height: 2;
  padding: 0 1rem 0.5rem 1rem;
  display: flex;
  align-items: flex-start;
`;

export const Price = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: #f26323;
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }

  @media (max-width: 360px) {
    font-size: 1.4rem;
  }
`;

export const ProductLink = styled(Link)`
  display: block;
  flex-direction: column;
  color: #023648;
  background-color: #fffffe;
  transition: all 0.3s ease-in;
  &:visited {
    color: #023648;
  }
  &:hover {
    box-shadow: 0px 1px 2px 0px rgba(60, 64, 67, 0.3),
      0px 2px 6px 2px rgba(60, 64, 67, 0.15);
    transform: scale(1.03);
  }
`;
