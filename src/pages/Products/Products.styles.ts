import styled from "styled-components";

export const ProductsPageContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2.5rem 1fr;
  margin-top: 2rem;
  margin-bottom: 3rem;
  gap: 2rem;
  width: 100%;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 320px;
  gap: 2rem;
  width: 80%;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 480px) {
    width: 90%;
  }
`;
