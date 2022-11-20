import styled from "styled-components";

type ItemProps = {
  displayDirection: string;
};

export const MinicartOverlay = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const MinicartContainer = styled.section`
  display: flex;
  flex-direction: column;
  /* grid-template-columns: 32rem; //remove later */

  width: 32rem;
  margin-top: 0.3rem;
  margin-right: 0.8rem;
  /* border: solid red 2px; */
  background-color: #fff;
  height: fit-content;
  max-height: 560px;
  overflow-y: auto;
  @media (max-width: 480px) {
    width: 100%;
    /* grid-template-columns: 1fr; */
    margin-left: auto;
    margin-right: auto;
    margin-top: 0.5rem;
  }
`;

export const MinicartHeader = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid #ddd 1px;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const HeaderItems = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  /* gap: 1rem; */
  position: relative;
  /* border: solid red 2px; */
  /* margin: 0 1rem; */
`;

export const MinicartHeading = styled.h4`
  flex: 1;
  text-align: center;
  color: #f26323;
`;
export const CloseMinicartBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  position: absolute;
  right: 0;
  top: 10px;
  /* border: solid red 1px; */
  svg {
    color: grey;
    &:hover {
      color: #fd3333;
    }
  }
`;

export const MiniCartItems = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 120px;
  gap: 1rem;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  margin-bottom: 1rem;

  /* border: solid blue 1px; */
`;

export const EmptyCartMessage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  /* border: dashed 2px #ccd7da; */
  border-radius: 2px;
  margin: 0 1rem 2rem 1rem;
  p {
    color: #b4b4b4;
  }
`;
