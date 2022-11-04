import { useGlobalContext } from "../../state/context/GlobalContext";
import { CartIcon } from "../CartIcon/CartIcon";
import { CartBadge, CartWrapper } from "./Cart.styles";
export const Cart = () => {
  const {
    state: { totalCartQuantity },
  } = useGlobalContext();
  // console.log(totalCartQuantity);
  return (
    <CartWrapper>
      <CartIcon />
      <CartBadge>{totalCartQuantity}</CartBadge>
    </CartWrapper>
  );
};
