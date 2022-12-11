import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 1360px;
  min-height: calc(100vh - 75.39px - 50px);
  margin: 2rem auto 3rem auto;
  color: #023846;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 380px) {
    width: 95%;
  }
`;

export const LoadingText = styled.p`
  font-size: 3.2rem;
  letter-spacing: 1px;
  @media (max-width: 480px) {
    font-size: 2.4rem;
  }

  @media (max-width: 380px) {
    font-size: 2rem;
  }
`;
