import styled from "styled-components";
import { Link } from "react-router-dom";
import vh from "../../assets/black2.jpg";

export const Container = styled.div`
  background: rgb(2, 56, 70);
  min-height: calc(100vh - 85.39px);
  position: relative;
  width: 100%;
`;

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 0 auto;
  gap: 1rem;
  width: 100%;
  height: 100%;
  @media (max-width: 762px) {
    width: 100%;
  }
`;

export const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0);
  @media (max-width: 860px) {
    background-image: url(${vh});
    background-repeat: no-repeat;
    background-size: cover;
    min-height: calc(100vh - 75.39px - 15.94px);
    width: 100%;
  }
`;

export const LeftContainerOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0);
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: blueviolet;
  width: 100%;
  @media (max-width: 860px) {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
  }
`;

export const HeroText = styled.h1`
  font-size: 48px;
  color: #96b4c4;
  text-align: left;
  font-weight: 700;
`;

export const UnderLine = styled.div`
  width: 30%;
  height: 0.5rem;
  background-color: #ffab00;
  margin-top: 1rem;
`;

export const ShopactionButton = styled.button`
  border: solid #d5d0c9 2px;
  background-color: rgb(214, 40, 40);
  color: #fff;
  color: #d5d0c9;
  width: 160px;
  height: 60px;
  margin-top: 6rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightContainer = styled.div`
  background-image: url(${vh});
  display: flex;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  overflow-y: hidden;
  flex: 1;
  @media (max-width: 880px) {
    background-position: 0 0;
  }
  @media (max-width: 860px) {
    display: none;
  }
`;

export const Span = styled.span`
  border-bottom: solid 5px #ffab00;
  border-bottom-width: 3px;
  padding-bottom: 5px;
`;
