import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useGlobalContext } from "../../state/context/GlobalContext";
import { setPrevPath } from "../../utils/setPreviouspath";
import { toggleCart } from "../../state/reducers/actionCreators";
import {
  CartButton,
  CloseMinicartBtn,
  HeaderItems,
  MinicartContainer,
  MiniCartFooter,
  MinicartHeader,
  MinicartHeading,
  MiniCartItems,
  MinicartOverlay,
} from "./MiniCart.styles";
import { CartItem } from "../CartItem/CartItem";
import { EmptyCartMessage } from "../EmptyCartMessage/EmptyCartMessage";

export const MiniCart = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const {
    dispatch,
    state: { cart, cartIsOpen },
  } = useGlobalContext();
  const closeOverLay = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget !== e.target) return;
    dispatch(toggleCart(setPrevPath(cartIsOpen, pathname)));
  };

  return (
    <MinicartOverlay onClick={closeOverLay}>
      <MinicartContainer>
        <MinicartHeader>
          <HeaderItems>
            <MinicartHeading>Cart Summary</MinicartHeading>
            <CloseMinicartBtn
              onClick={() =>
                dispatch(toggleCart(setPrevPath(cartIsOpen, pathname)))
              }
            >
              <AiOutlineClose />
            </CloseMinicartBtn>
          </HeaderItems>
        </MinicartHeader>
        {cart.length === 0 ? (
          <EmptyCartMessage pathname={pathname} />
        ) : (
          <MiniCartItems>
            {cart.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </MiniCartItems>
        )}
        {cart.length !== 0 && (
          <MiniCartFooter>
            <CartButton
              onClick={() => {
                navigate("cart");
                dispatch(toggleCart(setPrevPath(cartIsOpen, pathname)));
              }}
            >
              view cart
            </CartButton>
            <CartButton>checkout</CartButton>
          </MiniCartFooter>
        )}
      </MinicartContainer>
    </MinicartOverlay>
  );
};
