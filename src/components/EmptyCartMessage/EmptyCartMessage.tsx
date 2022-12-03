import { Link, Path } from "react-router-dom";
import { useGlobalContext } from "../../state/context/GlobalContext";
import { toggleCart } from "../../state/reducers/actionCreators";
import { setPrevPath } from "../../utils/setPreviouspath";
import { Button } from "../ActionButton/ActionButton.styles";
import { EmptyCartIcon } from "../EmptyCartIcon/EmptyCartIcon";
import { MessageWrapper } from "./EmptyCartMessage.styles";

type PathnameType = {
  pathname: string;
};

export const EmptyCartMessage = ({ pathname }: PathnameType) => {
  const {
    dispatch,
    state: { cartIsOpen },
  } = useGlobalContext();
  return (
    <MessageWrapper>
      <EmptyCartIcon />
      <p>Your cart is Empty</p>
      <Button
        as={Link}
        to={"/products/all"}
        marginTop="0"
        height="4rem"
        width="12rem"
        borderColor="rgb(214, 40, 40)"
        onClick={() => dispatch(toggleCart(setPrevPath(cartIsOpen, pathname)))}
      >
        go to shop
      </Button>
    </MessageWrapper>
  );
};
