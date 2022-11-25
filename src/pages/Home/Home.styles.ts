import styled from "styled-components";

type Props = {
  direction?: string;
  color?: string;
};

type IndexType = {
  sliderIndex: number;
};

type IsActiveType = {
  isActive: boolean;
};

type LeftType = {
  bgUrl?: string;
};

export const Container = styled.div`
  height: calc(100vh - 85.39px);
  /* height: 100vh; */
  position: relative;
  width: 100%;

  /* overflow: hidden; */
  /* border: solid blue 2px; */
  display: flex;
`;

export const ArrowWrapper = styled.span`
  position: absolute;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
  background-color: transparent;
  border: solid 2px #222;
  color: #222;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  top: 0;
  bottom: 0;
  left: ${({ direction }: Props) => direction === "left" && "1rem"};
  right: ${({ direction }: Props) => direction === "right" && "1rem"};
  margin: auto;
  z-index: 5;
  cursor: pointer;
  @media (max-width: 1020px) {
    display: none;
    color: #ffdfdf;
    border-color: #ffdfdf;
    opacity: 0.5;
    height: 2.5rem;
    width: 2.5rem;
    font-size: 1rem;
  }
`;

export const Indicator = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  background-color: transparent;
  position: absolute;
  bottom: 10px;
  left: 50%;
  right: 50%;
  z-index: 3;
  transform: translate(-50%, -50%);
  @media (max-width: 1080px) {
    width: 40%;
  }
  @media (max-width: 480px) {
    width: 60%;
  }
`;

export const SliderIndicator = styled.div`
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 50%;
  border: solid 2px #011a20;
  background-color: ${({ isActive }: IsActiveType) =>
    isActive ? " #011a20 " : null};
  cursor: pointer;
  /* #9ed3e0 */
  @media (max-width: 1020px) {
    border-color: #fff;
    background-color: ${({ isActive }: IsActiveType) =>
      isActive ? "#fff" : null};
  }
`;

export const SlidesWrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(
    ${({ sliderIndex }: IndexType) => sliderIndex * -100}vw
  );
`;

export const Slide = styled.div`
  display: flex;
  background-color: #ffedd4;
  width: 100vw;
  height: 100%;
`;

export const Left = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  @media (max-width: 1020px) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${({ bgUrl }: LeftType) => `${bgUrl}`});
    background-size: cover;
    background-position: center;
    position: relative;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  flex: 1;
  object-fit: cover;
  object-position: center;
  @media (max-width: 1020px) {
    display: none;
  }
`;

export const HeroTextLeft = styled.article`
  height: 100%;
  width: 100%;
  padding: 5rem 5rem;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  @media (max-width: 1020px) {
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 0;
    padding-bottom: 0;
    text-align: center;
  }
`;

export const Right = styled.div`
  flex: 1;
  height: 100%;
  align-items: center;
  @media (max-width: 1020px) {
    display: none;
  }
`;

export const HeroTextRight = styled.article`
  padding: 5rem 5rem;
  color: #011a20;
  @media (max-width: 1020px) {
    display: block;
  }
`;

export const Title = styled.h1`
  font-size: 54px;
  margin: 50px 0;
  text-transform: uppercase;
  @media (max-width: 480px) {
    font-size: 42px;
    margin: 20px 5px;
  }
`;

export const Description = styled.p`
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 2px;
  @media (max-width: 480px) {
    font-size: 20px;
    /* margin: 20px 5px; */
  }
`;
