import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CategoryWrapper = styled.nav`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  /* display: flex;
  justify-content: center;
  align-items: center;*/
  /* justify-content: space-around; */
  /*width: 100%;
  flex-wrap: nowrap;
  overflow-x: auto; */
  -webkit-overflow-scrolling: touch;
  /* border: solid 1px red; */
  /* border-radius: 8px; */
  /* max-width: 420px; */
  margin: auto auto;
  /* width: 100%; */

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 520px) {
    width: 90%;
    /* font-size: 12px; */
    /* padding: 0 1rem; */
    /* margin: 0 5px; */
  }
`;

export const NaVLinks = styled.div`
  /* display: flex; */
  display: inline-block;
  /* margin: auto auto; */
  padding: 0 1rem;
  /* border: solid lemonchiffon 1px; */
  /* vertical-align: middle; */
  /* margin: auto 0; */
  /* flex: 0 0 auto; */
  /* flex: 1; */
  /* flex-wrap: nowrap; */
  /* width: 100%; */
  &:not(:last-child) {
    border-right: solid rgba(0, 48, 73, 0.25) 1px;
  }

  &:last-child {
    padding-right: 0;
  }
  &:first-child {
    padding-left: 0;
  }

  @media (max-width: 480px) {
    /* margin-right: 1rem; */
    /* height: 2rem; */
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-transform: capitalize;
  color: rgb(0, 48, 73);
  height: inherit;
  /* border: solid red 1px; */
  &:visited {
    color: rgb(0, 48, 73);
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }

  @media (max-width: 360px) {
    font-size: 1.2rem;
  }
`;
