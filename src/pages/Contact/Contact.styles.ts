import styled from "styled-components";

type ValidateColorType = {
  color?: string;
  borderSize?: string;
};

export const Container = styled.div`
  width: 90%;
  max-width: 1360px;
  min-height: calc(100vh - 75.39px - 50px);
  margin: 2rem auto 3rem auto;
  color: #023846;
  display: flex;
  flex-direction: column;

  @media (max-width: 380px) {
    width: 95%;
  }
`;

export const PageHeading = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: auto;
  height: 60px;
  @media (max-width: 480px) {
    font-size: 2.4rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: solid red 2px;
`;
export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 600px;
  border: solid #c9c9c9 1px;
  padding: 5rem 2rem 3rem;
  margin: 3rem auto 0 auto;
  border-radius: 5px;
  height: fit-content;
  color: #888;
  position: relative;
  @media (max-width: 860px) {
    max-width: none;
    width: 95%;
  }
  @media (max-width: 480px) {
    padding: 5rem 1.5rem 3rem;
  }
  @media (max-width: 380px) {
    padding: 5rem 1rem 3rem;
  }
`;

export const Successful = styled.div`
  display: flex;
  justify-content: center;
  /* width: 90%;
  background-color: green; */
`;

export const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  width: 100%;
`;

export const Input = styled.input`
  display: block;
  border-style: solid;
  border-width: ${({ borderSize }: ValidateColorType) => borderSize || "1px"};
  border-color: ${({ color }: ValidateColorType) => color || "#c9c9c9"};
  padding: 8px 10px;
  border-radius: 3px;
  width: 100%;
  color: #555;
  font-weight: 400;
  @media (max-width: 380px) {
    font-size: 1.4rem;
  }
  &::placeholder {
    color: #555;
    @media (max-width: 380px) {
      font-size: 1.4rem;
    }
  }
`;

export const TextArea = styled.textarea`
  padding: 8px 10px;
  border-style: solid;
  border-width: ${({ borderSize }: ValidateColorType) => borderSize || "1px"};
  border-color: ${({ color }: ValidateColorType) => color || "#c9c9c9"};
  width: 100%;
  border-radius: 3px;
  appearance: none;
  height: 250px;
  @media (max-width: 380px) {
    font-size: 1.4rem;
  }
  &::placeholder {
    color: #555;
    @media (max-width: 380px) {
      font-size: 1.4rem;
    }
  }
`;

export const ValidationMessage = styled.span`
  color: #ff6347;
  font-size: 1.4rem;
  text-align: left;
  margin-left: 1rem;
`;

export const SubmitBtutton = styled.button`
  background-color: #f26323;
  color: #fff;
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 1.6rem;
  padding: 1rem 0;
  width: 30%;
  margin: 0 auto;
  border-radius: 3px;
  text-transform: uppercase;
  @media (max-width: 480px) {
    width: 100%;
    font-size: 1.4rem;
  }
`;
