import { Container, LoadingText } from "./LoadingIndicator.styles";

type LoadingtextType = {
  loadingText: string;
};

export const LoadingIndicator = ({ loadingText }: LoadingtextType) => {
  return (
    <Container>
      <LoadingText>{loadingText}</LoadingText>
    </Container>
  );
};
