import { useNavigate } from "react-router-dom";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import {
  BackButton,
  CartItemsContainer,
  CartItemsList,
  CartItemsListHeader,
  Container,
  HeaderItem,
  HeadingText,
  Nav,
  PageTitle,
  TitleWrapper,
} from "./Cart.styles";
import { useGlobalContext } from "../../state/context/GlobalContext";
import { CartItem } from "./CartItem/CartItem";

export const Cart = () => {
  const navigate = useNavigate();
  const {
    state: { cart },
  } = useGlobalContext();

  const [parent] = useAutoAnimate<HTMLUListElement>();

  return (
    <>
      <Container>
        <Nav>
          <BackButton onClick={() => navigate(-1)}>back</BackButton>
        </Nav>
        <TitleWrapper>
          <PageTitle>cart</PageTitle>
        </TitleWrapper>
        <CartItemsContainer>
          <CartItemsListHeader>
            <HeaderItem flex={3}>
              {" "}
              <HeadingText>product</HeadingText>
            </HeaderItem>
            <HeaderItem flex={1}>
              <HeadingText>price</HeadingText>
            </HeaderItem>
            <HeaderItem flex={1}>
              <HeadingText>quantity</HeadingText>
            </HeaderItem>

            <HeaderItem flex={1} align="flex-end">
              <HeadingText>total</HeadingText>
            </HeaderItem>

            <HeaderItem flex={0.4}>
              <HeadingText></HeadingText>
            </HeaderItem>
          </CartItemsListHeader>
          <CartItemsList ref={parent}>
            {cart.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </CartItemsList>
        </CartItemsContainer>
      </Container>
    </>
  );
};
