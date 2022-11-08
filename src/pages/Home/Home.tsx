import { useParams, useLocation, Link } from "react-router-dom";
import { useGlobalContext } from "../../state/context/GlobalContext";

import {
  Container,
  HeroText,
  LayoutWrapper,
  LeftContainer,
  LeftContainerOverlay,
  RightContainer,
  ShopactionButton,
  Span,
  UnderLine,
} from "./Home.styles";
import pics2 from "../../assets/max.png";

export const Home = () => {
  return (
    <Container>
      <LayoutWrapper>
        <LeftContainer>
          <LeftContainerOverlay>
            <HeroText>
              The largest collection of top <Span>QUALITY</Span> brands
            </HeroText>
            <ShopactionButton as={Link} to={"/products/all"}>
              Shop Now
            </ShopactionButton>
          </LeftContainerOverlay>
        </LeftContainer>
        <RightContainer />
      </LayoutWrapper>
    </Container>
  );
};
