import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  textSize?: string;
  imageUrl?: string;
};

export const ProductsPageContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2.5rem 1fr;
  margin-top: 2rem;
  margin-bottom: 3rem;
  gap: 2rem;
  /* border: solid pink 1px; */
  width: 100%;

  @media (max-width: 480px) {
    /* grid-template-rows: 2rem 1fr; */
  }
`;

export const ProductsContainer = styled.div`
  /* background-color: #f5f5f5; */
  /* min-height: calc(100vh - 85.39px - 15.94px); */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 320px;
  /* flex-direction: row; */
  /* padding: 0 70px; */
  gap: 2rem;
  /* margin: 0 auto; */
  width: 80%;
  margin: 0 auto;
  /* flex-wrap: wrap; */
  /* overflow-y: hidden; */
  /* border: solid blue 1px; */
  line-height: 1.6;

  @media (max-width: 480px) {
    width: 90%;
  }
`;
