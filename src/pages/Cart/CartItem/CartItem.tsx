import { AiOutlineClose } from "react-icons/ai";
import { useGlobalContext } from "../../../state/context/GlobalContext";
import {
  addItem,
  decreaseItem,
  removeItem,
} from "../../../state/reducers/actionCreators";
import { formatPrice } from "../../../utils/formatPrice";
import { formatTitle } from "../../../utils/formatTitle";
import { ProductTitle } from "../Cart.styles";
import {
  CartItemWrapper,
  ImageWrapper,
  ProductImage,
  TextSpan,
  QuantityWrapper,
  Button,
  Product,
  Price,
  Quantity,
  Total,
  CloseBtn,
  BtnWrapper,
} from "./CartItem.styles";

type Props = {
  id: number;
  quantity: number;
  price: number;
};
export const CartItem = ({ id, quantity, price }: Props) => {
  const {
    state: { products },
    dispatch,
  } = useGlobalContext();
  const product = products.find((i) => i.id === id);
  return (
    <CartItemWrapper>
      <Product>
        <ImageWrapper>
          <ProductImage src={`${product?.image}`} alt={product?.title} />
        </ImageWrapper>
        <ProductTitle>
          <TextSpan>{formatTitle(product?.title)}</TextSpan>
        </ProductTitle>
      </Product>
      <Price>
        <TextSpan>{formatPrice(price)}</TextSpan>
      </Price>

      <Quantity>
        <QuantityWrapper>
          <Button onClick={() => dispatch(decreaseItem(id))}>&#8722;</Button>
          <TextSpan alignText="center" color="#555">
            {quantity}
          </TextSpan>
          <Button onClick={() => dispatch(addItem({ id, quantity: 1, price }))}>
            &#43;
          </Button>
        </QuantityWrapper>
      </Quantity>
      <Total>
        <TextSpan>{formatPrice(price * quantity)}</TextSpan>
      </Total>

      <BtnWrapper>
        <CloseBtn onClick={() => dispatch(removeItem(id))}>
          <AiOutlineClose />
        </CloseBtn>
      </BtnWrapper>
    </CartItemWrapper>
  );
};
