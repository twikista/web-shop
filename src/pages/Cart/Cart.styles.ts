import { type } from "os";
import styled from "styled-components";

type HeadingProps = {
  flex: number;
  align?: string;
};

type ListType = {
  ref: React.RefObject<HTMLUListElement>;
};

export const Container = styled.div`
  width: 90%;
  max-width: 1360px;
  min-height: calc(100vh - 75.39px - 50px);
  /* min-width: 320px; */
  /* min-height: 100vh; */
  margin-top: 2rem;
  margin-bottom: 3rem;
  margin: 0 auto;
  color: #023846;
  /* display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 8rem 1fr;
  gap: 2rem;
  background-color: #fffffe;
  font-size: 1.6rem;
  @media (max-width: 480px) {
  } */
  @media (max-width: 380px) {
    width: 95%;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* padding: 5px 0; */
  margin: 1.5rem 0 1rem 0;
`;

export const BackButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem 1.2rem;
  border: solid 1px #ddd;
  border-radius: 0.5rem;
  @media (max-width: 480px) {
    padding: 0.4rem 1rem;
    font-size: 1.2rem;
  }
`;

export const TitleWrapper = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  @media (max-width: 480px) {
    padding: 0 0;
  }
`;

export const PageTitle = styled.h2`
  font-weight: 700;
  font-size: 5.2rem;
  @media (max-width: 680px) {
    font-size: 4rem;
  }
  @media (max-width: 480px) {
    font-size: 3rem;
  }
  @media (max-width: 380px) {
    font-size: 2.5rem;
  }
`;

export const CartItemsContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4rem 1fr;
`;

export const CartItemsListHeader = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  /* justify-content: space-between; */
  border-bottom: solid #cecece 1px;
  margin-bottom: 0.5rem;
`;

export const HeaderItem = styled.div`
  flex: ${({ flex }: HeadingProps) => flex};
  display: flex;
  align-items: center;
  justify-content: ${({ align }: HeadingProps) => align};
`;

export const HeadingText = styled.h3`
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;

  /* border: solid 1px red; */
  @media (max-width: 680px) {
    font-size: 1.4rem;
  }
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const CartItemsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 80px;

  /* border: solid blue 1px; */
  /* gap: 1rem; */
  width: 100%;
  /* margin: 0 auto;
  justify-content: center;
  margin-bottom: 1rem; */
`;

export const CartItem = styled.li`
  display: flex;
  height: 100%;
  padding: 5px 5px;
  width: 100%;
  /* margin: 0 auto; */
  gap: 1rem;
  color: #555;
  border: solid 1px #ddd;
  border-radius: 2px;
  /* background-color: #f8f8f8; */
`;

export const Product = styled.div`
  flex: ${({ flex }: HeadingProps) => flex};
  display: flex;
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

export const ProductTitle = styled.span`
  font-size: 1rem;
  /* border: solid pink 2px; */
`;
