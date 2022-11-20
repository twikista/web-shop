import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useGlobalContext } from "../../state/context/GlobalContext";
import { setPrevPath } from "../../utils/setPreviouspath";
import { toggleCart } from "../../state/reducers/actionCreators";
import {
  CloseMinicartBtn,
  EmptyCartMessage,
  HeaderItems,
  MinicartContainer,
  MinicartHeader,
  MinicartHeading,
  MiniCartItems,
  MinicartOverlay,
} from "./MiniCart.styles";
import { CartItem } from "../CartItem/CartItem";
import { EmptyCartIcon } from "../EmptyCartIcon/EmptyCartIcon";
import { Button } from "../ActionButton/ActionButton.styles";

export const MiniCart = () => {
  const { pathname } = useLocation();
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
          <EmptyCartMessage>
            <EmptyCartIcon />
            <p>Your cart is Empty</p>
            <Button
              as={Link}
              to={"/products/all"}
              marginTop="0"
              height="4rem"
              width="12rem"
              borderColor="rgb(214, 40, 40)"
            >
              go to shop
            </Button>
          </EmptyCartMessage>
        ) : (
          <MiniCartItems>
            {cart.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </MiniCartItems>
        )}
      </MinicartContainer>
    </MinicartOverlay>
  );
};
