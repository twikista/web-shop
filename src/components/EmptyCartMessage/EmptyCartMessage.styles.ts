import styled from "styled-components";

type WrapperType = {
  position?: string;
  marginTop?: string;
  fontSize?: string;
};

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  margin: ${({ marginTop }: WrapperType) => marginTop || 0} 1rem 2rem 1rem;
`;

export const Text = styled.p`
  font-size: ${({ fontSize }: WrapperType) => fontSize};
  color: #b4b4b4;
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;
