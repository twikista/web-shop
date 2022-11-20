import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../../state/context/GlobalContext";
import { toggleCart } from "../../state/reducers/actionCreators";
import { CartIcon } from "../CartIcon/CartIcon";
import { CartBadge, CartWrapper } from "./CartWidget.styles";
export const Cart = () => {
  const { pathname } = useLocation();
  const {
    state: { cartIsOpen, totalCartQuantity },
    dispatch,
  } = useGlobalContext();
  const setPrevPath = () => {
    let prevPath = "";
    if (cartIsOpen === false) {
      prevPath = pathname;
    } else {
      prevPath = "";
    }
    return prevPath;
  };
  return (
    <CartWrapper onClick={() => dispatch(toggleCart(setPrevPath()))}>
      <CartIcon />
      <CartBadge>{totalCartQuantity}</CartBadge>
    </CartWrapper>
  );
};
