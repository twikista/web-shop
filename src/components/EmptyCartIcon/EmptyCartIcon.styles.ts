import styled from "styled-components";
export const IconWrapper = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 60px;
    height: 40px;
    fill: #c8c8c8;
  }

  @media (max-width: 480px) {
    svg {
      /* width: 19px;
      height: 18px; */
    }
  }
`;
