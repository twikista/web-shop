import styled from "styled-components";

type ButtonProps = {
  width?: string;
  height?: string;
  marginTop?: string;
  borderColor?: string;
};

export const Button = styled.button`
  border: ${({ borderColor }: ButtonProps) =>
    `solid 2px ${borderColor || "#d5d0c9"}`};
  background-color: rgb(214, 40, 40);
  background-color: #f26323;
  color: #fff;
  color: #d5d0c9;
  width: ${({ width }: ButtonProps) => width || "16rem"};
  height: ${({ height }: ButtonProps) => height || "6rem"};
  margin-top: ${({ marginTop }: ButtonProps) => marginTop || "6rem"};
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  /* @media(max-width:480){
width:
  } */
  &:hover {
    background-color: rgb(214, 40, 40);
    background-color: #d64603;
    color: #fff;
  }
`;
